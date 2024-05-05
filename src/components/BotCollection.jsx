import React, { useEffect, useState } from 'react'; // Import necessary hooks

function BotCollection() {
  const [bots, setBots] = useState([]); // Array to store bot data
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Store any errors

  useEffect(() => {
    const fetchBots = async () => { // Use async/await for cleaner syntax
      try {
        const response = await fetch("http://localhost:3000/bots"); // Fetch data
        if (!response.ok) { // Check for HTTP errors
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBots(data); // Update state with fetched bot data
      } catch (error) {
        setError(error); // Handle errors
      } finally {
        setIsLoading(false); // Always set loading state to false after fetching
      }
    };

    fetchBots(); // Call the function to fetch data when the component mounts
  }, []); // Empty dependency array ensures fetching happens only once

  // Handle loading and error states appropriately in your JSX
  return (
    <div>
      {isLoading ? (
        <p>Loading bots...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {bots.map((bot) => (
            <li key={bot.id || bot._id}> {/* Use a unique identifier for each bot */}
              
              <p>{bot.name}</p>
              <p>{bot.health}</p>
              <p>{bot.damage}</p>
              <p>{bot.armour}</p>
              <p>{bot.bot_class}</p>
              <p>{bot.catchphrase}</p>
              <img src={bot.avatar_url} alt="okay" />
              <p>{bot.created_at}</p>
              <p>{bot.updated_at}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BotCollection;
