class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    @current_user = user.reset_session_token
    session[:session_token] = @current_user
  end

  def logout!
    @current_user.reset_session_token
    session[:session_token] = nil
  end

  def require_loggin
    unless current_user
      render json: ['invalid credentials'], status: 401
    end
  end

end
