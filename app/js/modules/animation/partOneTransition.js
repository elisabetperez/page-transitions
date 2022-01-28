import Highway from '@dogstudio/highway';

class PartOneTransition extends Highway.Transition{
    in({from, to, done}){
        from.remove();
        done();
    }

    out({from, done}){
        done();
    }
}

export default PartOneTransition; 