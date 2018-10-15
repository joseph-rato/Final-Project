  json.extract! user, :id, :username, :email
  if (user.avatar.attached? == true)
    json.avatarPic url_for(user.avatar)
  end
