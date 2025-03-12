import React from "react";
import {categoryInfo} from "./CategoryInfo";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() { //parent component, display info. through child.
  return (
    <section className={classes.category__container}>
      {categoryInfo.map((infos, i) => { //map the 4 pictures in line 2.
        return <CategoryCard data={infos} key={i} />; //use props to display categoryCard, child component
      })}
    </section>
  );
}

export default Category;
