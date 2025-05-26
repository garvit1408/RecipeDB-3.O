// FAQ.jsx
import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Q2 from "./assets/q2.png";
import License from "./assets/lisence.png";
import "./FAQ.scss";

const faq = [
  {
    key: "ddbc4a",
    q: "What is RecipeDB2?",
    a: "RecipeDB2 is an extensive, structured compilation of recipes and their nutritional profiles. This repertoire comprises 128,942 recipes with 35,474 ingredients from seven continents, 32 regions, 99 countries, and 34 states, further linked to nutritional profiles (USDA). This resource aims to facilitate scientific explorations of the culinary space (recipe, ingredients, cooking processes, dietary styles, etc.), seeking divergent applications.",
  },
  {
    key: "f248a4",
    q: "What are the different concepts represented in RecipeDB2 and how do they relate to each other?",
    a: "Concepts presented in RecipeDB2 include recipes, the region they originated in, and the ingredients utilized in their preparation. It also includes the nutritional profiles of both recipes and their ingredients. The illustration depicts relationships among the different concepts incorporated into RecipeDB2. In this example, we have the recipe ‘Prawn Nasi Goreng’ which belongs to the Southeast Asian region, specifically to the Indonesian sub-region. The estimated nutritional profile of the recipe contains information on its nutrient content such as the number of calories, proteins, etc. The recipe is characterized by its dietary attributes. Each ingredient in a recipe is characterized by attributes such as quantity, unit and state as well as its own nutritional profile.",
  },
  {
    key: "206252",
    q: "What types of queries are processed by RecipeDB2?",
    a: "RecipeDB2 facilitates an elastic search to query recipes based on factors such as geographical location of origin (i.e. region, country), name, dietary classification, ingredients associated/unassociated with the recipe and its nutritional information (i.e. calorie, protein, etc. content).",
  },
  {
    key: "4f6470",
    q: "How do I use 'Recipe Search'?",
    a: "Refer to the “Search” section on the “How to Use” page.",
  },
  {
    key: "3379ca",
    q: "How do I use “Advanced Search”?",
    a: "Refer to the “Advanced Search” section on the “How to Use” page.",
  },
  {
    key: "d61737",
    q: "What are the various recipes within RecipeDB2?",
    a: "A list of all the recipes in RecipeDB2 can be obtained by simply hitting the ‘Search’ button on the recipe search page without providing any specific query.",
  },
  {
    key: "1e650c",
    q: "What are the prerequisites required in order to use RecipeDB2?",
    a: "A modern web browser.",
  },
  {
    key: "b1eb4a",
    q: "How does RecipeDB2 obtain the individual nutritional profiles of ingredients in a recipe?",
    a: "RecipeDB2 uses information such as the state and quantity of an ingredient in a recipe to calculate its estimated nutritional profile by mapping it to the USDA data.",
  },
  {
    key: "db5a4e",
    q: "How does RecipeDB2 estimate a recipe’s nutritional profile?",
    a: "For every ingredient of a recipe its features were extracted: ingredient name, state, quantity, unit, dry/fresh, temperature, and size. Using the name of the ingredient and its state, each ingredient was mapped to a unique ‘NDB ID’ from USDA database. Further using the standard nutrition data from USDA data tables, the nutritional profile of the ingredient was estimated by mapping quantity and unit. The final ‘estimated nutritional profile’ is a sum total of nutritional values of each ingredient in it.",
  },
  {
    key: "bde2fe",
    q: "How were the Dietary Styles (vegan, pescatarian, ovo-vegetarian, lacto-vegetarian, ovo-lacto-vegetarian) ascertained for the recipes?",
    a: "The Dietary Style of each recipe was decided based on the constraints followed by each of these categories. For this version the ingredient categories dish and bakery were refrained from the dietary style determination.",
  },
  {
    key: "d24d3c",
    q: "What are the categories ingredients are sorted into?",
    a: "Starting with manually labeled data, a Random Forest model was used to predict the ingredient category. The ingredients were curated into the 34 categories given below:",
  },
  
  {
    key: "9c7835",
    q: "What browsers are supported by RecipeDB2?",
    a: "RecipeDB2 supports all modern web browsers, but it can be best viewed on Chrome, Firefox and Edge.",
  },
  {
    key: "a6ac2f",
    q: "What is the Tech Stack used to build RecipeDB2?",
    a: "Frontend: Material UI, ReactJS, SCSS, JavaScript, Google Charts, Plotly. Backend: ExpressJS, Elasticsearch, MongoDB, NodeJS.",
  },
  {
    key: "8f7af6",
    q: "What are the sources of information for RecipeDB2?",
    a: "RecipeDB2 has sourced the recipes from many online resources, and its nutritional information from the USDA Food Composition Databases.",
  },
  {
    key: "2abf87",
    q: "Does RecipeDB2 use cookies?",
    a: "RecipeDB2 uses cookies to provide statistics that help us give the best possible experience for our site.",
  },
  {
    key: "ca058b",
    q: "Can I access RecipeDB2 using my mobile phone?",
    a: "Although RecipeDB2 is best viewed on a desktop, the website is accessible from most modern mobile web browsers.",
  },
  {
    key: "1e56c5",
    q: "How do I access the data from RecipeDB2?",
    a: "We provide options for downloading the data from RecipeDB2. The data is available under",
  },
  {
    key: "1be128",
    q: "How do I contribute to the data from RecipeDB2?",
    a: "",
  },
  {
    key: "50b19d",
    q: "What is the license under which RecipeDB2 is available?",
    a: "We provide options for downloading the data from RecipeDB2. The data is available under",
  },
  {
    key: "686e50",
    q: "How do I cite RecipeDB2?",
    a: "Mansi Goel, Sumit Bhagat, Saloni Srivastava, Malav Patel, Hardi Parikh and Ganesh Bagler*, A framework for recipe data structure with applications for culinary and nutritional insights, 2024",
  }
];

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="lg" className="faq-container">
      <Typography variant="h4" className="faq-title">
        Frequently Asked Questions (FAQs)
      </Typography>
      <div className="faq-wrapper">
        {faq.map((item, index) => (
          <Accordion
            key={item.key}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            className="faq-accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              className="faq-summary"
            >
              <Typography variant="subtitle1" className="faq-question">
                Q{index + 1}. {item.q}
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails className="faq-details">
              <Typography variant="body1" className="faq-answer">
                {item.a}
                {item.key === "f248a4" && (
                  <div className="faq-image-wrapper">
                    <img src={Q2} alt="Concepts diagram" className="faq-image" />
                  </div>
                )}
                {item.key === "d24d3c" && (
                  <ul className="faq-list">
                    {["Additive", "Bakery", "Beverage", "Beverage-Alcoholic", "Cereal", "Condiment", "Dairy", "Dish", "Essential Oil", "Fish", "Fruit", "Fungi", "Herb", "Legume", "Maize", "Meat", "Nuts and Seeds", "Plant", "Plant Derivative", "Seafood", "Spice", "Vegetable"].map((cat, i) => (
                      <li key={i} className="faq-list-item">• {cat}</li>
                    ))}
                  </ul>
                )}
                {(item.key === "1e56c5" || item.key === "50b19d") && (
                  <div>
                    <a
                      href="http://creativecommons.org/licenses/by-nc-sa/3.0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="faq-link"
                    >
                      Creative Commons License Attribution-NonCommercial-ShareAlike 3.0 Unported (CC BY-NC-SA 3.0)
                    </a>
                    <div className="faq-image-wrapper">
                      <img src={License} alt="License" className="faq-image" />
                    </div>
                  </div>
                )}
                {item.key === "1be128" && (
                  <div className="faq-contact">
                    <p>
                      You may contact us at <a href="mailto:bagler+RecipeDB2@iiitd.ac.in" target="_blank" rel="noopener noreferrer">bagler+RecipeDB2@iiitd.ac.in</a>
                    </p>
                    <p>
                      Additionally, you may also fill the following form to report errata or give suggestions:
                    </p>
                    <p>
                      Errata: <a href="https://forms.gle/cRcdTbUUg7osr2Ak7" target="_blank" rel="noopener noreferrer">https://forms.gle/cRcdTbUUg7osr2Ak7</a>
                    </p>
                    <p>
                      Suggestions: <a href="https://forms.gle/bb44J6taJnmiwipo9" target="_blank" rel="noopener noreferrer">https://forms.gle/bb44J6taJnmiwipo9</a>
                    </p>
                  </div>
                )}
                {item.key === "686e50" && (
                  <p>
                    <a
                      href="http://cosylab.iiitd.edu.in/recipedb2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="faq-link"
                    >
                      http://cosylab.iiitd.edu.in/recipedb2/
                    </a>
                  </p>
                )}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Container>
  );
}