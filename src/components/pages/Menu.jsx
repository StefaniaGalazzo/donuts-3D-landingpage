import { Suspense } from "react";
import ExperienceMenu from "../3D/ExperienceMenu";
import { useState } from "react";

export default function Menu() {
  // eslint-disable-next-line no-unused-vars
  const [elPosition, setElPosition] = useState([-3, 0.5, 0]);
  const [donutIngredient, setDonutIngredient] = useState({
    donut: "",
    glaze: { color: "pink", flavor: "Strawberry" },
    glazeOptions: [
      { color: "pink", flavor: "Strawberry" },
      {
        color: "orange",
        flavor: "Orange",
      },
      {
        color: "brown",
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
          border: "1px solid blue",
        }}
      >
        <ExperienceMenu
          position={elPosition}
          rotation={[-1, 0.6, 0]}
          donutIngredient={donutIngredient}
        />
        <section style={{ position: "absolute", right: "38%", top: "40%" }}>
          <h3 style={{ border: "1px solid pink", padding: "10px 20px" }}>
            Choose Your Donut
          </h3>
          <div className="actions">
            <div style={{ border: "1px solid pink", padding: "10px 20px" }}>
              Confetti
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
            <div style={{ border: "1px solid pink", padding: "10px 20px" }}>
              Glaze
              <select
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
              Donut
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}
