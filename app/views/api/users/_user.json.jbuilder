  json.extract! user, :id, :username, :email, :headline
  if (user.avatar.attached? == true)
    json.avatarPic url_for(user.avatar)
  end
  if (user.profile_header.attached? == true)
    json.profileHeader url_for(user.profile_header)
  end
