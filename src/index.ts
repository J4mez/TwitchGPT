import { completion } from './complete';


completion("This is a test").then((response) => {
    console.log(response.data);
});