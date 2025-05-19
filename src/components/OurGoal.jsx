"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import { Pie } from 'react-chartjs-2'; // Pie component can also render doughnut charts
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function OurGoal() {
  const socialMediaTime = 3.2;
  const otherFreeTime = 1.3;
  const totalFreeTime = socialMediaTime + otherFreeTime;

  const pieChartData = {
    // Updated labels
    labels: ['Time wasted on social media', 'Other Free Time'],
    datasets: [
      {
        label: 'Free Time Allocation',
        data: [socialMediaTime, otherFreeTime],
        backgroundColor: [
          '#FFFFFF', // White for social media
          '#a3d9a5', // Green for other free time
        ],
        borderColor: [
          '#073b3a', // Dark border for social media slice
          '#073b3a', // Dark border for other free time slice
        ],
        borderWidth: 2,
        hoverBackgroundColor: [ // Slightly different colors on hover for better feedback
          '#f0f0f0', // A light grey for white slice hover
          '#8bcba6', // A slightly darker green for green slice hover
        ],
        hoverBorderColor: [
          '#1a9959', // Accent color for border on hover
          '#1a9959', // Accent color for border on hover
        ],
        hoverBorderWidth: 4, // Thicker border on hover
        hoverOffset: 15,      // Makes the slice pop out more on hover
        cutout: '65%',        // Makes this a doughnut chart! Adjust percentage for hole size
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom', // Moved legend to bottom for a different feel
        labels: {
          color: '#073b3a',
          font: {
            weight: 'bold',
            size: 14,
          },
          padding: 20, // Added padding to legend items
          usePointStyle: true, // Use point style (circles) for legend items
          pointStyle: 'circle',
        }
      },
      title: {
        display: true,
        text: 'Your Daily Free Time: A Closer Look', // More engaging title
        color: '#073b3a',
        font: {
          size: 20, // Slightly larger title
          weight: 'bold',
          family: 'Inter, sans-serif', // Assuming a common sans-serif font
        },
        padding: {
          top: 10,
          bottom: 25 // More space below title
        }
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(7, 59, 58, 0.9)', // Dark, slightly transparent background #073b3a
        titleColor: '#a3d9a5', // Green title in tooltip
        bodyColor: '#FFFFFF',   // White body text in tooltip
        borderColor: '#1a9959',
        borderWidth: 1,
        padding: 10,
        cornerRadius: 5,
        usePointStyle: true,
        callbacks: {
          label: function(context) {
            let label = context.label || ''; // Use the direct label
            if (label) {
              label += ': ';
            }
            const value = context.parsed;
            const percentage = ((value / totalFreeTime) * 100).toFixed(1);
            if (value !== null) {
              label += value.toFixed(1) + ' hours (' + percentage + '%)';
            }
            return label;
          },
          // Optional: Customize title in tooltip if needed
          // title: function(tooltipItems) {
          //   return 'Breakdown';
          // }
        }
      }
    },
    animation: { // Enhanced animation
      animateRotate: true,
      animateScale: true,
      duration: 1200, // Duration of animation in milliseconds
      easing: 'easeInOutQuart' // Easing function for a smoother effect
    },
    layout: {
        padding: 10 // Add some padding around the chart area
    }
  };

  return (
    <div className="relative isolate bg-white sm:pt-6 px-6 pb-24 sm:pb-24 lg:px-8">
      {/* Background blob */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-1155/678 w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      <div className="mx-auto max-w-4xl">
        <h2 className="text-base/7 font-bold text-[#a3d9a5] text-center">
          Our Goal
        </h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-[#073b3a] text-center">
          How does 70% of your free time disappear?
        </p>

        {/* Explanation text */}
        <p className="mt-8 text-base sm:text-xl leading-7 sm:leading-8 font-medium text-[#073b3a] text-left">
          If you sleep 8 hours, work 8.5 hours, commute 1 hour, and spend 2
          hours on daily tasks, you have about{" "}
          <span className="font-bold text-[#1a9959]">4.5 hours</span> of free
          time each day. Out of this,{" "}
          <span className="font-bold text-[#1a9959]">3.2 hours</span> is
          typically spent on social media — <br></br> that's
          <span className="font-bold text-[#1a9959]"> more than 70%</span> of
          your free time.
        </p>

        {/* Balls legend - This is still relevant for the balls visualization */}
        <div className="mt-6 flex flex-col xs:flex-row items-center gap-4 xs:gap-6 text-base font-medium justify-center">
          <div className="flex items-center gap-2">
            <span className="inline-block w-6 h-6 rounded-full border-2 border-[#073b3a] shadow bg-white"></span>
            <span className="text-[#073b3a] font-bold">
              = time spent on social media
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2 xs:mt-0">
            <span className="inline-block w-6 h-6 rounded-full border-2 border-[#073b3a] bg-[#a3d9a5]"></span>
            <span className="text-[#073b3a] font-bold">= other free time</span>
          </div>
        </div>

        {/* Balls visualization - vertical layout */}
        <div className="mt-8 flex flex-col items-center gap-2">
          {Array.from({ length: 10 }).map((_, col) => (
            <div key={col} className="flex flex-row gap-2 sm:gap-4">
              {Array.from({ length: 10 }).map((_, row) => {
                const idx = col * 10 + row;
                return (
                  <span
                    key={row}
                    className={
                      idx < 71 
                        ? "inline-block w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-[#073b3a] bg-white"
                        : "inline-block w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#a3d9a5] border-2 border-[#073b3a] shadow"
                    }
                    style={{ margin: "1px" }}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Pie Chart Section */}
        <div className="mt-16 text-center"> {/* Increased top margin */}
            {/* Title is now part of the chart options, so you might not need this h3 unless it's for sectioning */}
            {/* <h3 className="text-2xl font-semibold text-[#073b3a] mb-6">
                Visualizing Your Free Time
            </h3> */}
            <div className="relative mx-auto w-full max-w-lg h-[28rem] sm:h-[32rem]"> {/* Adjusted max-w and height slightly */}
                <Pie data={pieChartData} options={pieChartOptions} />
            </div>
        </div>


        {/* Inspiration section */}
        <div className="mt-12 text-center"> {/* Adjusted margin */}
          <p className="text-xl font-semibold text-[#1a9959] mb-2">
            Imagine what you could do with that time...
          </p>
          <p className="text-base text-gray-700">
            Build a business. Learn a language. Get in shape. Read books. Spend
            more time with loved ones. <br />
            The possibilities are endless!
          </p>
        </div>
      </div>
      {/* Pricing cards section would go below */}
    </div>
  );
}