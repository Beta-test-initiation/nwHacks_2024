## Inspiration
In a world brimming with technological advancements, innovation must reach everyone, including those with visual impairments. We envisioned ExploreAble as a bridge between technology and accessibility, providing a seamless and enriching walking experience through new indoor environments for all users.

## What it does
ExploreAble is a virtual walking assistant designed to revolutionize how people, especially those who are visually impaired, interact with their surroundings. This innovative web app provides detailed audio descriptions of the environment, visual and audio descriptions of directions through intuitive interfaces, and real-time support, ensuring a safe and enjoyable walking experience.

## How we built it
**Setting up the environment**: We utilized the seamless page navigation capabilities of NEXT JS paired with tailwind css for our development environment and UI. Using Web Speech APIs and geolocation, we enabled user input to offer the best possible experience.

**Visual and Audio Directions**: Utilizing the MappedIn SDK, ExploreAble offers precise visual and auditory walking directions. The audio directions are crafted to be clear and easy to follow for visually impaired users.

**Environmental Descriptions:**  The app describes the user surroundings. Whether it's identifying street names, describing nearby landmarks, or alerting about potential obstacles, ExploreAble provides a comprehensive understanding of the user's environment.

**User-Friendly Interface for Visually Impaired Users:** With an interface designed with the visually impaired in mind, ExploreAble is equipped with voice commands, large text options, and high-contrast visuals, ensuring ease of use for all.

## Challenges we ran into

During the integration process of MappedIn's API into our application, we encountered several challenges. Discrepancies between the hackathon's hooks and the provided documentation posed an initial hurdle. Additionally, we confronted server-side rendering (SSR) issues with the implementation of maps in NEXT JS.

Our attempt to utilize the MapMaker frame proved insufficient as it lacked the essential information required for the successful implementation of our desired functionality. The acquisition and real-time updating of audio and location permissions proved to be a complex task.

The occurrence of merge conflicts, though a common occurrence, added a layer of complexity to the integration process, resulting in a laborious and exhaustive resolution process. Furthermore, we faced multiple runtime errors with NEXT JS when attempting to integrate components.

After encountering a dead-end in the search for a voice-based chatbot solution, we opted to develop our proprietary communication system where we encountered challenges in the interpretation of audio-based instructions, leading to difficulties in seamless execution.


## Accomplishments that we're proud of
**Effective Integration of Technologies:** We successfully integrated the Mappedin API with the React packages and Node.js, creating a seamless and efficient user experience.

**Accessible Design:** We are proud of developing an app that is highly accessible to visually impaired users, featuring voice navigation and clear audio descriptions, which make independent mobility easier.

**Real-Time Navigation and Descriptions:** Our application effectively provides real-time navigation and environmental descriptions, enhancing the walking experience for all users.

## What we learned
**Importance of Inclusive Design:** We gained a deeper understanding of the challenges faced by visually impaired individuals and the importance of creating technology that is accessible to everyone.

**Complexities of Voice Recognition Technology:** We learned about the intricacies of voice recognition and the importance of extensive testing in diverse environments to ensure reliability.

## What's next for ExploreAble
**Expanding Geographic Coverage:** We plan to integrate more comprehensive mapping data to expand the geographic availability of the app.

**Enhancing Voice Recognition Accuracy:** Continued development and training of the Speech-to-Text technology to improve accuracy and responsiveness.

**Partnerships for Real-Time Data:** We aim to partner with city authorities and public transportation agencies to incorporate real-time updates about the environment and public transport.

**Community Engagement Features:** Implementing features that allow users to share their experiences and tips, fostering a community of support and information sharing.

**Continuous User Interface Improvements:** Regular updates to the user interface to make it even more intuitive and user-friendly for people with various degrees of visual impairment.
