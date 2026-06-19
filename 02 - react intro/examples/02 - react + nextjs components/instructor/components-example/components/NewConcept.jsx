// "props", short for 'properties', are the standard way of passing data
// between components, and generally look like HTML attributes in the JSX

// There are two ways of ingesting props:
//   a) one single argument for all props -> each prop is a property on that argument
//   b) destructuring -> each prop directly (e.g. {concept, author} )
// You'd use this in JSX as:
//   <NewConcept concept="how to make a component" author="Oliver" />

export default function NewConcept(props) {
  return (
    <p>In this class, we've learned: {props.concept}</p>
  )
}
