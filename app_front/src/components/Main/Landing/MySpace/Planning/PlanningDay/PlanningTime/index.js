/* eslint-disable max-len */
import React from 'react';

import './styles.scss';

const PlanningTime = ({
  time, stateLikeDay, userInfos, activeGroup,
}) => {
  // Il faut maintenant vérifier si ce meal est présent dans le state
  // eslint-disable-next-line max-len
  const dayIsIncluded = userInfos.groups[activeGroup].meals.filter((meal) => meal.day === stateLikeDay);
  const mealIsIncluded = dayIsIncluded.some((element) => element.time === time);
  const includedMealContent = dayIsIncluded.find((element) => element.time === time);
  console.log(userInfos.groups[activeGroup].meals);
  console.log(stateLikeDay);

  return (
    <>
      {mealIsIncluded && (
      <div className="planning__day__box--found">
        <ul className="found__recipes">
          {includedMealContent.recipes.map((recipe) => {
            console.log('recipe', recipe);

            return (
              <li key={`${recipe.id}${stateLikeDay}`}>
                <div className="meal__container">
                  <img className="meal__pic" src={recipe.url} alt="meal planning" />
                  {recipe.title}
                </div>
                <div className="notification__number__people">{recipe.MealHasRecipe.numberPeople}</div>
              </li>
            );
          })}
        </ul>
      </div>
      )}
      {!mealIsIncluded && (
      <div className="planning__day__box"> </div>
      )}
    </>
  );
};

export default PlanningTime;
