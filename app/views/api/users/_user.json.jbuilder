  json.extract! user, :id, :username, :email, :headline
  if (user.avatar.attached? == true)
    json.avatarPic url_for(user.avatar)
  end
