import { Suspense } from "react";
import ExperienceMenu from "../3D/ExperienceMenu";
import { useState } from "react";

export default function Menu() {
  // eslint-disable-next-line no-unused-vars
  // const [elPosition, setElPosition] = useState();
  const [donutIngredient, setDonutIngredient] = useState({
    donut: { type: "Normal", color: "rgb(230,130,30)" },
    donutType: [
      { type: "Normal", color: "rgb(230,130,30)" },
      { type: "Choco", color: "maroon" },
      { type: "Vanilla", color: "rgb(250,150,50)" },
    ],
    glaze: { color: "rgb(200,250,250)", flavor: "Sugar" },
    // glaze: { color: "rgb(245,240,240)", flavor: "Sugar" },
    glazeOptions: [
      { color: "hotpink", flavor: "Strawberry" },
      {
        color: "yellow",
        flavor: "Citrus",
      },
      {
        color: "lime",
        flavor: "Hulk",
      },
      {
        color: "rgb(180,8,2)",
        flavor: "Velvet",
      },
      {
        color: "rgb(77,22,10)",
        flavor: "Chocho",
      },
    ],
    confetti: {
      rounded: false,
      squared: false,
    },
  });

  return (
    <Suspense fallback={<p>loading...</p>}>
      <div
        style={{
          position: "relative",
          height: "100%",
        }}
      >
        <ExperienceMenu
          position={[-3, 0.5, 0]} //initial [-3, 0.5, 0]
          rotation={[-1, 0.6, 0]}
          donutIngredient={donutIngredient}
        />
        <section style={{ position: "absolute", right: "35%", top: "25%" }}>
          <h3 style={{ border: "1px solid pink", padding: "10px 20px" }}>
            Choose Your Donut
          </h3>
          <div className="actions">
            <div style={{ border: "1px solid pink", padding: "10px 20px" }}>
              Donut Type: <br />
              {donutIngredient.donutType.map((radio, indx) => (
                <label key={indx}>
                  <input
                    type="radio"
                    name="donutType"
                    value={radio.type}
                    checked={donutIngredient.donut.type === radio.type}
                    onChange={() => {
                      setDonutIngredient({
                        ...donutIngredient,
                        donut: {
                          ...donutIngredient.donut,
                          type: radio.type,
                          color: radio.color,
                        },
                      });
                    }}
                  />
                  {radio.type}
                </label>
              ))}
            </div>

            <div style={{ border: "1px solid pink", padding: "10px 20px" }}>
              Glaze:
              <br />
              <select
                value={donutIngredient.glaze.flavor}
                onChange={(e) => {
                  const selectedValue = e.target.value;
                  const selectedGlaze =
                    donutIngredient.glazeOptions.find(
                      (option) => option.color === selectedValue
                    ) || {};
                  setDonutIngredient({
                    ...donutIngredient,
                    glaze: selectedGlaze,
                  });
                }}
              >
                <option value={donutIngredient.glaze.color}>
                  {donutIngredient.glaze.flavor}
                </option>
                {donutIngredient.glazeOptions.map((option, index) => {
                  return (
                    <option key={index} value={option.color}>
                      {option.flavor}
                    </option>
                  );
                })}
              </select>
            </div>
            <div style={{ border: "1px solid pink", padding: "10px 20px" }}>
              Confetti:
              <br />
              <form style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  id="rounded"
                  name="rounded"
                  checked={donutIngredient.confetti.rounded}
                  onChange={() => {
                    setDonutIngredient({
                      ...donutIngredient,
                      confetti: {
                        ...donutIngredient.confetti,
                        rounded: !donutIngredient.confetti.rounded,
                      },
                    });
                  }}
                />
                <label htmlFor="squared" style={{ margin: "0 10px 0 0 " }}>
                  Rounded
                </label>
                <input
                  type="checkbox"
                  id="squared"
                  name="squared"
                  checked={donutIngredient.confetti.squared}
                  onChange={() => {
                    setDonutIngredient({
                      ...donutIngredient,
                      confetti: {
                        ...donutIngredient.confetti,
                        squared: !donutIngredient.confetti.squared,
                      },
                    });
                  }}
                />
                <label htmlFor="squared">Squared</label>
              </form>
            </div>
            <button
              className="order"
              style={{
                width: "100%",
                margin: "15px 0",
                padding: "10px 20px",
              }}
            >
              Order
            </button>
          </div>
        </section>
      </div>
    </Suspense>
  );
}
