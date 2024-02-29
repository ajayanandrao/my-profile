import React, { useEffect, useRef, useState } from 'react';
import "./Canvas.scss";

const Canvas = () => {

    const canvasRef = useRef();
    const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const circles = [];
        const radius = 20;
        const velocity = 0.5; // Adjust the velocity factor as needed

        const getRandomColor = () => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };

        const addCircle = (x, y) => {
            circles.push({
                x,  
                y,
                dx: (Math.random() - 0.5) * 2 * velocity,
                dy: (Math.random() - 0.5) * 2 * velocity,
                radius: Math.random() * 5,
                color: getRandomColor(),
            });
        };

        const updateCanvas = (event) => {
            const mouseX = event.clientX - canvas.offsetLeft;
            const mouseY = event.clientY - canvas.offsetTop;

            if (circles.length < 150) {
                for (let i = 0; i < 2; i++) {
                    addCircle(mouseX, mouseY);
                }
            }
        };

        const handleMouseMove = (event) => {
            updateCanvas(event);
        };

        const animate = () => {
            // Clear the canvas
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Draw and update each circle
            for (let i = 0; i < circles.length; i++) {
                const circle = circles[i];

                context.beginPath();
                context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
                context.fillStyle = circle.color;
                context.fill();
                context.closePath();

                circle.x += circle.dx;
                circle.y += circle.dy;

                // Check if the circle touches the canvas border
                if (
                    circle.x - circle.radius < 0 ||
                    circle.x + circle.radius > canvas.width ||
                    circle.y - circle.radius < 0 ||
                    circle.y + circle.radius > canvas.height
                ) {
                    // Remove the circle from the array
                    circles.splice(i, 1);
                    i--; // Adjust the loop index since the array length has changed
                }

                // Draw lines connecting circles within a certain distance
                for (let j = i + 1; j < circles.length; j++) {
                    const otherCircle = circles[j];
                    const distance = Math.sqrt(
                        Math.pow(otherCircle.x - circle.x, 2) +
                        Math.pow(otherCircle.y - circle.y, 2)
                    );

                    if (distance < 80) {
                        context.beginPath();
                        context.moveTo(circle.x, circle.y);
                        context.lineTo(otherCircle.x, otherCircle.y);
                        context.strokeStyle = "#181818"; // Line color
                        context.stroke();
                        context.closePath();
                    }
                }
            }

            requestAnimationFrame(animate);
        };

        // Add event listener for mousemove
        canvas.addEventListener('mousemove', handleMouseMove);

        // Start animation loop
        animate();

        // Cleanup event listener on component unmount
        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
        };

    }, []);


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        // Function to update window width
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', updateWindowWidth);

        // Initial window width
        setWindowWidth(window.innerWidth);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

    return (
        <div className='canvas-div'>
            <canvas ref={canvasRef} width={windowWidth < 503 ? 503 : 1300} height={600} />
        </div>
    )
}

export default Canvas


// ======================================

// import React, { useEffect, useRef, useState } from 'react';
// import "./Canvas.scss";

// const Canvas = () => {

//     const canvasRef = useRef();
//     const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 50 });

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const context = canvas.getContext('2d');
//         const circles = [];
//         const radius = 20;
//         const velocity = 0.5; // Adjust the velocity factor as needed

//         const getRandomColor = () => {
//             const letters = '0123456789ABCDEF';
//             let color = '#';
//             for (let i = 0; i < 6; i++) {
//                 color += letters[Math.floor(Math.random() * 16)];
//             }
//             return color;
//         };

//         const addCircle = (x, y) => {
//             circles.push({
//                 x,
//                 y,
//                 dx: (Math.random() - 0.5) * 2 * velocity,
//                 dy: (Math.random() - 0.5) * 2 * velocity,
//                 radius: Math.random() * 5,
//                 color: getRandomColor(),
//             });
//         };

//         const updateCanvas = (event) => {
//             const mouseX = event.clientX - canvas.offsetLeft;
//             const mouseY = event.clientY - canvas.offsetTop;

//             if (circles.length < 100) {
//                 for (let i = 0; i < 2; i++) {
//                     addCircle(mouseX, mouseY);
//                 }
//             }
//         };

//         const handleMouseMove = (event) => {
//             updateCanvas(event);
//         };

//         const animate = () => {
//             // Clear the canvas
//             context.clearRect(0, 0, canvas.width, canvas.height);

//             // Draw and update each circle
//             for (let i = 0; i < circles.length; i++) {
//                 const circle = circles[i];

//                 context.beginPath();
//                 context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
//                 context.fillStyle = circle.color;
//                 context.fill();
//                 context.closePath();

//                 circle.x += circle.dx;
//                 circle.y += circle.dy;

//                 // Check if the circle touches the canvas border
//                 if (
//                     circle.x - circle.radius < 0 ||
//                     circle.x + circle.radius > canvas.width ||
//                     circle.y - circle.radius < 0 ||
//                     circle.y + circle.radius > canvas.height
//                 ) {
//                     // Remove the circle from the array
//                     circles.splice(i, 1);
//                     i--; // Adjust the loop index since the array length has changed
//                 }

//                 // Draw lines connecting circles within a certain distance
//                 for (let j = i + 1; j < circles.length; j++) {
//                     const otherCircle = circles[j];
//                     const distance = Math.sqrt(
//                         Math.pow(otherCircle.x - circle.x, 2) +
//                         Math.pow(otherCircle.y - circle.y, 2)
//                     );

//                     if (distance < 80) {
//                         context.beginPath();
//                         context.moveTo(circle.x, circle.y);
//                         context.lineTo(otherCircle.x, otherCircle.y);
//                         context.strokeStyle = "#181818"; // Line color
//                         context.stroke();
//                         context.closePath();
//                     }
//                 }
//             }

//             requestAnimationFrame(animate);
//         };

//         // Add event listener for mousemove
//         canvas.addEventListener('mousemove', handleMouseMove);

//         // Start animation loop
//         animate();

//         // Cleanup event listener on component unmount
//         return () => {
//             canvas.removeEventListener('mousemove', handleMouseMove);
//         };

//     }, []);


//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//     useEffect(() => {
//         // Function to update window width
//         const updateWindowWidth = () => {
//             setWindowWidth(window.innerWidth);
//         };

//         // Add event listener for window resize
//         window.addEventListener('resize', updateWindowWidth);

//         // Initial window width
//         setWindowWidth(window.innerWidth);

//         // Clean up the event listener on component unmount
//         return () => {
//             window.removeEventListener('resize', updateWindowWidth);
//         };
//     }, []);

//     return (
//         <div className='canvas-div'>
//             <canvas ref={canvasRef} width={windowWidth < 503 ? 503 : 1300} height={600} />
//         </div>
//     )
// }

// export default Canvas