import Highway from '@dogstudio/highway';

class DefaultTransition extends Highway.Transition{
    in({from, to, done}){
        from.remove();
    }

    out({from, done}){
        done();
    }
}

export default DefaultTransition; 