"use client"

import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
    <h2>Our plans</h2>
    <ul>
    {CORE_CONCEPTS.map((blockName) => (
      <CoreConcept key={blockName.description} {...blockName} />
    ))}
  </ul>
</section>
); 
}




