document.addEventListener('DOMContentLoaded', () => {
    const redButton = document.getElementById('red');
    const yellowButton = document.getElementById('yellow');
    const greenButton = document.getElementById('green');
    
    const states = {
        RED: 'red',
        YELLOW: 'yellow',
        GREEN: 'green'
    };

    let currentState = states.RED;
    let timer = null;

    const setState = (newState) => {
        currentState = newState;
        clearTimeout(timer);
        updateButtons();

        switch (currentState) {
            case states.RED:
                timer = setTimeout(() => setState(states.GREEN), 20000); // 20 seconds
                break;
            case states.YELLOW:
                timer = setTimeout(() => setState(states.RED), 5000); // 5 seconds
                break;
            case states.GREEN:
                timer = setTimeout(() => setState(states.YELLOW), 15000); // 15 seconds
                break;
        }
    };

    const updateButtons = () => {
        redButton.classList.toggle('active', currentState === states.RED);
        yellowButton.classList.toggle('active', currentState === states.YELLOW);
        greenButton.classList.toggle('active', currentState === states.GREEN);
        
        redButton.classList.toggle('inactive', currentState !== states.RED);
        yellowButton.classList.toggle('inactive', currentState !== states.YELLOW);
        greenButton.classList.toggle('inactive', currentState !== states.GREEN);
    };

    redButton.addEventListener('click', () => setState(states.RED));
    yellowButton.addEventListener('click', () => setState(states.YELLOW));
    greenButton.addEventListener('click', () => setState(states.GREEN));

    // Initialize the traffic light
    setState(states.RED);
});
