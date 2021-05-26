## ToDO

[]Initialize our React Project, perform clean-up and ensure application can run.
[]Install & Setup Tailwind Styling
[]Build out basic Component Structure. What are our components? 1) Left-Side Navagation
a) 4 options: News, Media, Login/Logout, Favorites
b) With a Dark Styling button added
c) This will take up our left side our application. Will use tailwind for styling 2) Middle is Feed/Content. This will be one whole component
a) This is where we use React-router-dom to enable SPA
b) Our navbar will decide the state of left side of our main section(content), then that controls the state of the content that shows on the right
c) We will Style our components depending on what information our user is querying.
ex: Media will only be youtube links.
We will only allow for specific filtering options for querying our API 3) Right side coin Price Tracker
a) This will query its own API(coingecko)
b) Will loop through the top 20 currencies by MarketCap, and show statistics
c) Will have 2 filtering options (24h/7D)
d) takes up our right side of application. Static

[]Setup Redux?
a) Do we need a state management tool? - Yes. The state of our components are dependent on entirely separate components. These are not directly child/parents
b) Setup Redux

[]Setup React-router-Dom?
a) Do we need react router?
