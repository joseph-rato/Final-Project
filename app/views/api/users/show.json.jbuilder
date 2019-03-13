json.set! @user.id do 
  json.partial! 'api/users/user', user: @user
  if (@user.profile_header.attached? == true)
    json.profileHeader url_for(@user.profile_header)
  end
end
