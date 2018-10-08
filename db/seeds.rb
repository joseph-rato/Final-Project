# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# need to destroy all the database examples so when i create it's not there
User.destroy_all

Faker::UniqueGenerate.clear

for i in (0..99) do
  if i % 3 == 0
    username = Faker::StarWars.unique.character
  elsif i % 3 == 1
    username = Faker::BojackHorseman.unique.character
  else
    username = Faker::Dune.unqiue.character
  end
end

username.gsub!(/[^0-9A-Za-z_]/,"$")

while User.findby(username: username)
  username += "#{rand 9}"
end

User.create(
  username: username,
  email: Faker::Internet.safe_email(username),
  password: Faker::Internet.password(9)
)
