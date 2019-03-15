  user1 = User.create({username: "test1", password_digest: "$2a$10$Iy41hdAKn4IdUbFYiAs95uaYo/PeWv588xiyS6bdDQgEmz9dCaWfi", session_token: "5TFcKqo1FHHnaxbygSevAQ", email: "test1@gmail.com", website: nil, headline: nil})
  user2 = User.create({username: "mat", password_digest: "$2a$10$Iy41hdAKn4IdUbFYiAssdfaYo/PeWv588xiyS6bdDQgEmz9dCaWfi", session_token: "5TFcKqo1FHHnaxbygSe3AQ", email: "mat@gmail.com", website: nil, headline: nil})
  user3 = User.create({username: "joseph", password_digest: "$2a$10$Iy41hdAKn4IdUbFYido95uaYo/PeWv588xiyS6bdDQgEmz9dCaWfi", session_token: "5TFcKqo1FHHnaxby2SevAQ", email: "john@gmail.com", website: nil, headline: nil})
  user4 = User.create({username: "jacob", password_digest: "$2a$10$Iy41hdAKn4IdUbFYiAs95uaYo/PeWv588xiyS6bdDQgEmz9dCaWfi", session_token: "5TFcKqo1FHHnaxbygdevAQ", email: "joseph@gmail.com", website: nil, headline: nil})
  user5 = User.create({username: "jenny", password_digest: "$2a$10$Iy41hdAKn4IdUbFYiAsfuaYo/PeWv588xiyS6bdDQgEmz9dCaWfi", session_token: "5TFcKqo1FHHnaxbygSsvAQ", email: "letgo@gmail.com", website: nil, headline: nil})
  user6 = User.create({username: "smith", password_digest: "$2a$10$Iy41hdAKn4IdUbFYiA235uaYo/PeWv588xiyS6bdDQgEmz9dCaWfi", session_token: "5TFcKqo1FHHnaxbyg4evAQ", email: "smithg@gmail.com", website: nil, headline: nil})
  user7 = User.create({username: "oliver", password_digest: "$2a$10$Iy41hdAKn4IdUbFYi4695uaYo/PeWv588xiyS6bdDQgEmz9dCaWfi", session_token: "5TFcKqo1FHHnaxby5SevAQ", email: "jenny@gmail.com", website: nil, headline: nil})
  user8 = User.create({username: "don", password_digest: "$2a$10$Iy41hdAKn4IdUbFYiAs99caYo/PeWv588xiyS6bdDQgEmz9dCaWfi", session_token: "5TFcKqo1FHHnaxbygSe6AQ", email: "don@gmail.com", website: nil, headline: nil})

  user1.avatar.attach(io: File.open('app/assets/images/guywithglasses-sqr.jpg'), filename: 'guywithglasses.jpg')
  user2.avatar.attach(io: File.open('app/assets/images/tom_hanks.jpg'), filename: 'tom_hanks.jpg')
  user3.avatar.attach(io: File.open('app/assets/images/bret-sqr.jpg'), filename: 'bret.jpg')
  user4.avatar.attach(io: File.open('app/assets/images/jenny-sqr.jpg'), filename: 'jenny.jpg')
  user5.avatar.attach(io: File.open('app/assets/images/user7.jpg'), filename: 'user7.jpg')
  user6.avatar.attach(io: File.open('app/assets/images/user8-sqr.jpg'), filename: 'user8.jpg')
  user7.avatar.attach(io: File.open('app/assets/images/Joseph-sqr.jpg'), filename: 'Joseph_Oliver_2.jpg')
  user8.avatar.attach(io: File.open('app/assets/images/don-sqr.jpg'), filename: 'don.jpg')






  product1 = Product.create({user_id: 1, product_name: "Flying Cats", website: "kittencannon.us", social: "www.facebook.com/kitten-cannon", description: "a cannon that shoots cats", around_the_web: "http://www.fastgames.com/kitten-cannon", details: "This is an addicting game that shoots cats really far and hits randomly generated objects.\n\nGreat fun for the whole family.\n\nHowever you probably want to be older then 5! and have no psychopathic tendencies", video_link: "https://www.youtube.com/watch?v=8q2w0Hb_-ps"})
  product2 = Product.create({user_id: 2, product_name: "CastBox", website: "https://castbox.fm/", social: "www.facebook.com/castbox", description: "A website to find all types of podcasts", around_the_web: "https://www.investopedia.com/insights/top-startups/", details: "CastBox wants to become the “YouTube of audio.” The company makes a podcast player that also helps users discover new podcasts. Founder Xiaoyu Wang says her goal is make finding key sections of audio on the web as easy as finding key pieces of text. So far, CastBox has raised $16 million in funding as it plans to launch an audio search feature that processes natural language.\n", video_link: ""})
  product3 = Product.create({user_id: 4, product_name: "Mixpanel", website: "https://mixpanel.com/", social: "https://twitter.com/mixpanel", description: "Provides A/B testing ", around_the_web: "https://woocommerce.com/products/mixpanel/", details: "Mixpanel helps companies understand how their customers behave while on their websites or mobile apps by providing A/B testing tools. The startup wants to give clients the ability to look deeper than just page views and instead see the entire path of their customers. Founded in 2009, Mixpanel is now approaching a billion-dollar valuation.", video_link: "https://www.youtube.com/watch?v=2uNhae_bwWo"})
  product4 = Product.create({user_id: 4, product_name: "ClassDojo", website: "https://www.classdojo.com/", social: "https://twitter.com/classdojo", description: "Communication for parents students and teachers", around_the_web: "https://www.edsurge.com/product-reviews/classdojo", details: "ClassDojo is a communication platform that helps connect teachers, students and parents. Its platform allows teachers to encourage students while engaging with parents about their children's progress in the classroom. \n\nClassDojo is currently being used in 90 percent of the classrooms in the U.S. Founded in 2011 by Liam Don and Sam Chaudhary, the company has expanded to more than 180 countries.", video_link: "https://www.youtube.com/watch?v=Rzzb5cmNoc0"})
  product5 = Product.create({user_id: 1, product_name: "Instacart", website: "https://www.instacart.com/", social: "https://twitter.com/Instacart", description: "Same day grocery delivery service", around_the_web: "https://www.cnn.com/2018/10/16/tech/instacart-funding/index.html", details: "​Instacart, founded in 2012, is a same-day grocery delivery service. Customer can place an order either online or from their smartphones, and then have it delivered within an hour. \n\nThe company raised $400 million in funding earlier this year and is now valued at about $3.4 billion.", video_link: "https://www.youtube.com/watch?v=ZxpReM4rE60"})
  product6 = Product.create({user_id: 3, product_name: "Noodle", website: "https://noodle.ai/", social: "https://twitter.com/NoodleAI?lang=en", description: "Noodle uses ai to manage business", around_the_web: "https://www.businesswire.com/news/home/20180626005253/en/Noodle.ai-Raises-35-Million-Series-Funding", details: "Math. Data. Supercomputing. Business expertise.\n\nNoodle.ai combines the most recent innovations in each of these areas and the resulting learning algorithms may indeed seem magical.\n\nNoodle.ai is the world's most sophisticated Enterprise AI system to manage complex business operations.", video_link: "https://www.youtube.com/watch?v=D7PUQfGm0UU"})
  product7 = Product.create({user_id: 5, product_name: "Dotify", website: "www.dotify.io", social: "www.twitter.com/dotify", description: "Music playing app", around_the_web: "www.newyorktimes.com/dotifyiscrazybad", details: "\n\nDo\ntify is a super cool player that plays music and it doe\ns m\n\nusic playing! The logo is stolen from spotify but replaces the SP with a \nD.", video_link: "www.youtube.com/dooootify"})
  product8 = Product.create({user_id: 6, product_name: "Matsana", website: "https://matsana.herokuapp.com/#/login", social: "www.twitter.com/matsana", description: "A project managers dream", around_the_web: "www.newyorktimes.com/supercoolapp", details: "Helps project managers manage their lazy employees", video_link: "www.youtube.com/matsanaisgreat"})

  product1.list_photo.attach(io: File.open('app/assets/images/flyingcat-logo.jpg'), filename: 'flyingcat-logo.jpg')
  product1.photos.attach(io: File.open('app/assets/images/flying-kitty-website.jpg'), filename: 'flying-kitty-website.jpg')
  product2.list_photo.attach(io: File.open('app/assets/images/castbox-logo.jpg'), filename: 'castb0x-logo.jpg')
  product2.photos.attach(io: File.open('app/assets/images/castbox-website.jpg'), filename: 'castbox-website.jpg')
  product3.list_photo.attach(io: File.open('app/assets/images/mixpanellogo.jpg'), filename: 'mixpannellogo.jpg')
  product3.photos.attach(io: File.open('app/assets/images/mixpanel-website.jpg'), filename: 'mixpanel-website.jpg')
  product4.list_photo.attach(io: File.open('app/assets/images/classdojo.jpg'), filename: 'classdojologo.jpg')
  product4.photos.attach(io: File.open('app/assets/images/classdojo-website.jpg'), filename: 'classdojo-website.jpg')
  product5.list_photo.attach(io: File.open('app/assets/images/instacart-logo.jpg'), filename: 'instacart-logo.jpg')
  product5.photos.attach(io: File.open('app/assets/images/instacart-website.jpg'), filename: 'instacart-website.jpg')
  product6.list_photo.attach(io: File.open('app/assets/images/noodleai-logo.jpg'), filename: 'noodleai-logo.jpg')
  product6.photos.attach(io: File.open('app/assets/images/noodleai-website.jpg'), filename: 'noodleai-website.jpg')
  product7.list_photo.attach(io: File.open('app/assets/images/spotify-logo.jpg'), filename: 'spotify-logo.jpg')
  product7.photos.attach(io: File.open('app/assets/images/Spotify-website.jpg'), filename: 'Spotify-website.jpg')
  product8.list_photo.attach(io: File.open('app/assets/images/asanalogo.jpg'), filename: 'asanalogo.jpg')
  product8.photos.attach(io: File.open('app/assets/images/asana.jpg'), filename: 'asana.jpg')


  Review.create({rating: 1, comment: "wow this is great", product_id: 1, user_id: 1})
  Review.create({rating: 1, comment: "i cant believe this game is so addicting", product_id: 1, user_id: 2})
  Review.create({rating: 1, comment: "I let this game run on in the background", product_id: 1, user_id: 3})
  Review.create({rating: 1, comment: "i've not slept for 4 days", product_id: 1, user_id: 4})
  Review.create({rating: 1, comment: "help the house is the only place i can play without feeling judged", product_id: 1, user_id: 5})
  Review.create({rating: 1, comment: "why can do i love this so much", product_id: 2, user_id: 2})
  Review.create({rating: 1, comment: "because it's changed your life", product_id: 2, user_id: 3})

  ProductDiscussion.create({user_id: 1,product_id: 1,body: "Honestly sometimes I'm jealous of how far they can fly"})#1
  ProductDiscussion.create({user_id: 2,product_id: 2,body: "This is where I get all of my podcasts now because before I couldn't find everything in one spot"})
  ProductDiscussion.create({user_id: 3,product_id: 3,body: "Thanks to this we can do constant updating and testing with user. Sometimes we try out a new build and then watch how they user our website, then make appropriate changes. VERY USEFUL!"})
  ProductDiscussion.create({user_id: 4,product_id: 4,body: "Wow I wish I had this as a kid!"})#4
  ProductDiscussion.create({user_id: 3,product_id: 5,body: "I actually never have to leave my house now"})
  ProductDiscussion.create({user_id: 7,product_id: 6,body: "Woww when is our AI overlords coming to take us over???"})#6
  ProductDiscussion.create({user_id: 6,product_id: 7,body: "This seems oddly similar to spotify look it even has playlists"})
  ProductDiscussion.create({user_id: 8,product_id: 8,body: "This keeps everyone at my office on task really helpful honstly."})
  ProductDiscussion.create({user_id: 2,product_id: 1,body: "Damn how is this humane at all"})#9
  ProductDiscussion.create({user_id: 3,product_id: 1,body: "WOW I want this so bad youre next year's present is here"})
  ProductDiscussion.create({user_id: 5,product_id: 1,body: "Terrible idea for real life okay as a game"})
  ProductDiscussion.create({user_id: 7,product_id: 1,body: "THIS IS INSANE ANYONE WHO BUYS THIS IS TERRIBLE"})#12
  ProductDiscussion.create({user_id: 4,body_id: 10,body: "Dude read a dictionary it's your"})
  ProductDiscussion.create({user_id: 5,body_id: 11,body: "I feel like i played this in my childhood"})
  ProductDiscussion.create({user_id: 7,body_id: 1,body: "HOw could you say this????"})

  Tag.find_or_create_by({tags: "Tech", product_id: 1})
  Tag.find_or_create_by({tags: "Tech", product_id: 2})
  Tag.find_or_create_by({tags: "Education", product_id: 2})
  Tag.find_or_create_by({tags: "Tech", product_id: 3})
  Tag.find_or_create_by({tags: "AI", product_id: 3})
  Tag.find_or_create_by({tags: "Tech", product_id: 4})
  Tag.find_or_create_by({tags: "Education", product_id: 4})
  Tag.find_or_create_by({tags: "Tech", product_id: 5})
  Tag.find_or_create_by({tags: "Tech", product_id: 6})
  Tag.find_or_create_by({tags: "AI", product_id: 6})
  Tag.find_or_create_by({tags: "Tech", product_id: 7})
  Tag.find_or_create_by({tags: "Music", product_id: 7})
  Tag.find_or_create_by({tags: "Productivity", product_id: 7})
  Tag.find_or_create_by({tags: "Tech", product_id: 8})
  Tag.find_or_create_by({tags: "Productivity", product_id: 8})
  