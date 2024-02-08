// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/api/example/[...params].js

export default function handler(req, res) {
  const { params } = req.query;

  // Extracting multiple URL parameters
  const { isConnected, maticBalance, centBalance, ...otherParams } = params;

  // Handle the parameters as needed
  console.log('isConnected:', isConnected);
  console.log('maticBalance:', maticBalance);
  console.log('centBalance:', centBalance);
  console.log('Other Parameters:', otherParams);

  // Store parameters in local storage if not undefined or null
  if (isConnected !== undefined && isConnected !== null) {
    localStorage.setItem('isConnected', isConnected);
  }
  if (maticBalance !== undefined && maticBalance !== null) {
    localStorage.setItem('maticBalance', maticBalance);
  }
  if (centBalance !== undefined && centBalance !== null) {
    localStorage.setItem('centBalance', centBalance);
  }
  if (otherParams.length > 0) {
    // localStorage.setItem('otherParams', JSON.stringify(otherParams));
    console.log(otherParams)
  }

  // You can perform any additional processing or send a response
  res.status(200).json({ message: 'Parameters stored in local storage.' });
}

