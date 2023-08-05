# What time is my bus?

[![Netlify Status](https://api.netlify.com/api/v1/badges/0d331f19-9829-4325-970f-1775b4d67ab6/deploy-status)](https://app.netlify.com/sites/what-time-is-my-bus/deploys)

[Check What time is my bus](https://what-time-is-my-bus.netlify.app/)

<p align="center">
<img height="570" alt="fromWorkToHome" src="https://github.com/eyeri91/what-time-is-my-bus/assets/70323981/6a613393-b1a4-40ce-9351-172478733680">
<img height="560" alt="fromHomeToWork" src="https://github.com/eyeri91/what-time-is-my-bus/assets/70323981/e7fa727a-52e8-4324-b3ad-3764c8261a76">
</p>

Tired of sifting through old pictures of timetables that you captured ages ago?

Open **My bus** Simply input your duty time, departing point, and within seconds, you'll receive the optimal bus schedule to get to work on time.

## Table of contents

1. [Goal](#goal)
2. [Problem statement](#problem-statement)
3. [Idea Overview](#idea-overview)
4. [Key Features and Benefits](#key-features-and-benefits)
5. [Implementation and Technical Details](#implementation-and-technical-details)
6. [Conclusion](#conclusion)
7. [Development](#development)
8. [Misc](#misc)

## Goal

To make the process of planning staff journeys work faster and simpler with a user-friendly tool that enhances their overall job satisfaction and productivity.

## Problem statement

The current process for staff to access updated bus schedules is cumbersome and inefficient.

- Manually checking for updates on the company portal and searching through phone galleries for old screenshots of bus schedules is time-consuming.

- Looking at the entire chart of schedule when seeking just one bus timing may not be the most convenient approach.

- The notifications for updates are easy to miss, which can affect the punctuality of staff in getting to work if they accidentally refer to outdated timetables.

## Idea Overview

‘When is my bus’ takes the crew member’s E-gate report time and departing point to provide the best bus timing for their commute. This web app considers different commuting times for each bus stop and presents three timings, including the best option and the one before, and the one after. Additionally, for crew traveling from work to home, the app automatically fetches the current time and offers the next three available buses.

## Key Features and Benefits

### Features

- Automated Commute Planning: Based on the user's chosen departing point and E-gate time, the app calculates and displays the best bus options to reach work on time. It takes into account the specific stop a user is taking the bus, providing tailored commute recommendations.

- Smart Commute Planning for Peak Hours: Considering the unpredictability of morning commutes and potential traffic jams, the app recommends three bus timings, highlighting the best option with a star sign. This feature ensures crew members are prepared for any delays that might occur during peak hours.

- Convenience for Return Commute: When a user selects "HQ" as their departing point, indicating their return to accommodation, the app automatically fetches the current time and displays the next three earliest bus timings. This feature streamlines the process of planning the return journey.

### Benefits

Improved Efficiency: Crew members can quickly and accurately plan their commutes, leading to better time management.

- Real-Time Updates: By automatically fetching the latest bus timing data, the app ensures that crew members have the most up-to-date information at their fingertips.

- Reduced Reliance on Manual Processes: By eliminating the need for crew members to manually check for updates by logging on to the crew portal or referring outdated schedules increases productivity and reduces the likelihood of errors.

- Scalability for Different Bus Routes: While initially developed for the Silicon bus route, the app can be expanded to cover any bus route within the company. It only requires additional data on travel times for each route and the inclusion of stops.

## Implementation and Technical Details

### Suggestions

ransforming this app into a Progressive Web App (PWA) offers several significant advantages such as

- Offline support: PWAs can cache necessary resources and content, allowing users to access and use the app even without an active internet connection.

- Fast Loading and Performance: Background caching enables faster loading times and higher user engagement.

- Add to Home Screen: PWAs can be easily added to the user's home screen without the need to download the app from an app store.

### Design system

The decision to retain the app as a Single Page Application (SPA) is well-suited to fulfill the specific functionalities required for our project.

- Lightweight and customizable solution: Expanding the app to cover all routes might lead to unnecessary data consumption and occupy valuable space on users' devices, potentially impacting app performance. By offering different link routes for specific destinations, crew members can access only the relevant information they need, reducing unnecessary clutter.

- Developing a separate mobile app may not be necessary, considering the abundance of existing company-related apps available to our staff.

### Vulnerabilities

- Data Exposure: Without proper security measures, sensitive bus timing data and user information could be exposed to unauthorized access.

Considering the company's concern about data security, making the webpage publicly available might not be ideal. However, adding authentication could indeed complicate the app and violate the goal of simplicity and speed. If necessary, a simple authentication mechanism (such as E-pin) can be set up to ensure that only authorized users (company employees) can access the bus schedule data.

## Conclusion

The app should find a perfect balance between data security and simplicity, ensuring a fast and user-friendly solution for crew members' commutes while protecting their data.

## Development

### Development

1. Run `npm install` to install project dependencies.
2. Run `npm start` to start the development server.

### Production

To build the project, run:
`npm run build`

# misc

Image credit : [Josue Isai Ramos Figueroa](https://unsplash.com/photos/n2NBgIx3A28) from [unsplash](https://unsplash.com/)
