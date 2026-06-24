// PROPS = properties = standard way yo pass componesnts
// gnerally look like HTML atrtibutes
//default 
export default function NewConcept(props) {
    return(
        //destructuring input prop is a better way b/c
        //you can see what the page is about instranlty
        //just one prop or whatever at a time
        //LOL i had them as .js not .jsx sweet potato

        <p> In this class, we've learned: {props.concept} </p>
    )

}