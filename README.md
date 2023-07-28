# When is my bus?

[![Netlify Status](https://api.netlify.com/api/v1/badges/0d331f19-9829-4325-970f-1775b4d67ab6/deploy-status)](https://app.netlify.com/sites/when-is-my-bus/deploys)

[Check when is your bus](https://when-is-my-bus.netlify.app)

Tired of sifting through old pictures of timetables that you captured ages ago?

Open **When is my bus?** Simply input your duty time, departing point, and within seconds, you'll receive the optimal bus schedule to get to work on time.

## Table of contents

1. [What it does](#what-it-does)
2. [Why was this built?](#why-was-this-built)
3. [What was used to build this](#what-was-used-to-build-this)

## What it does

**When is my bus** takes the user's duty starting time and departing point to provide the best bus timing for their commute. The app considers different commuting times for each bus stop and presents three timings, including the best option and the two previous bus timings. Additionally, for users traveling from work to home, the app automatically fetches the current time and offers the next three available buses.

## Why was this built?

I use the company-provided bus, which makes two stops during the commute to work. However, the company occasionally updates the bus schedule and uploads it on its website, requiring me to log in to the company portal to access the new version and save it in my phone gallery.

Given the nature of my job, my duty time varies, making it essential for me to regularly check the timetable to choose the most suitable bus. However, this process became tedious as I had to search through my phone gallery for an old screenshot or visit the website each time they made updates. Missing a new timing update could result in being late for work. Hence, I propose digitalizing this process and leveraging an app to streamline our commuting experience.

From the company's perspective, implementing this app would be effortless. They would only need to update the data whenever a change occurs. As employees, we would no longer have to worry about checking inaccurate timings or relying on outdated PDFs to plan our journeys to work.

My idea is to design an app that automatically selects the best bus option for me, eliminating mundane tasks and enhancing efficiency. One of the major benefits of this app is its scalability, as it can easily expand to cover all different bus routes within the company. By inputting travel times for each route, the app will be able to calculate the best bus timings for various routes, ensuring a seamless commuting experience for all employees.

# What was used to build this?

## Development

### Development

1. Run `npm install` to install project dependencies.
2. Run `npm start` to start the development server.

### Production

To build the project, run:
`npm run build`

# misc

Image credit : [Tim Dennert](https://unsplash.com/photos/ID3ZX0BqnS8) from [unsplash](https://unsplash.com/)
