import { Line } from "react-chartjs-2";
const Graph = () => {
  return (
    <Line
      className="mt-12 sm:mt-0 w-full"
      data={{
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
          {
            label: "Avg.sleep duration",
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: "#2659DB",
            borderColor: "#2659DB",
            scaleSteps: 5,
          },
        ],
      }}
      options={{
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      }}
    />
  );
};

export default Graph;
