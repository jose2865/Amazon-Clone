import React from "react";
import classes from "./Category.module.css";
import { Link } from "react-router-dom";
function CategoryCard({ data }) { 
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        {/* on num. 7, we get the dynamic routing from the data.name, name can be jewelery, electronics.../category/jewelery, category is route*/}
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
