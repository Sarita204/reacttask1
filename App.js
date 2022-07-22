/* <h1>Single Statement</h1> */
import './App.css';
const Person = () => {
  return (
    <>
      <h1>Single Statement</h1>
      <h4>Name: {"Sarita"}</h4>
      <h4>LastName: {"P"}</h4>
      <h4>Age: {24}</h4>
    </>

  )
}


//Different multiple Values statement//
const Persons = (props) => {
  return (
    <>
      <h4>Name:{props.Name}</h4>
      <h4>LastName:{props.LastName}</h4>
      <h4>Age:{props.Age}</h4>
    </>

  )
}


let Paragraph= () => {
  return (
    <>
     <p id="root">Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
     
     From the list above, let’s choose “illustration” as our rhetorical purpose. We'll walk through a 5-step process for building a paragraph that illustrates a point in an argument. For each step there is an explanation and example. Our example paragraph will be about human misconceptions of piranhas.</p>
    </>

  )
}

let Paragraphs= () => {
  return (
    <>
    <div class="end">Thank You</div>
    </>

  )
}

const app = () => {

  return (
    <div className="App">
      <Person/>
      <div class="multiple">
        <div class="heading">Different Value Statement</div>
        </div>
        <div class="container">
        <div class="person1"><Persons Name={"John"} LastName={"Doe"} Age={20} /></div>
        <div class="person2"><Persons Name={"Merry"} LastName={"Doe"} Age={25} /></div>
        <div class="person3"><Persons Name={"Joseph"} LastName={"Doe"} Age={30} /></div>
    </div>
    <Paragraph />
    <Paragraphs />
</div>
  );
}
export default app;