# Traffic Light Simulator

This is a simple web application that simulates a traffic light using Finite State Machines (FSM). 
The application controls the traffic light with three buttons: Red, Green, and Yellow. 
The state transitions of the traffic light are governed by the following rules:

- Initial State: Red
- Transition from Green to Yellow after 15 seconds (6 minutes)
- Transition from Yellow to Red after 5 seconds
- Transition from Red to Green after 20 seconds

In addition to the automatic state transitions, the traffic light can also be controlled manually by clicking on the buttons. For example:
- Clicking the Green button when the traffic light is in the Yellow state will skip the Red state and transition directly to the Green state.
- Similarly, clicking the Yellow button when the traffic light is in the Red state will transition directly to the Yellow state.

## Demo

You can view a live demo of the application hosted at https://techwithradhika.github.io/HacklabAssignment-1/

## Technologies Used

- HTML
- CSS
- JavaScript

## Usage

To run the application locally, 
Clone the repository: git clone https://github.com/techwithradhika/HacklabAssignment-1.git 
and open the `index.html`file (which is inside the HacklabAssignment-1 folder) in your web browser.
