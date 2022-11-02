const {Flights} = require('../models/Flight')
const {v4: uuid} = require('uuid')

// Get All Flights
exports.getFlights = async (req, res) => {
    try {
        const flight = Flights
        res.status(200).json({
            message: 'All Flights',
            flight
        })
    } catch (err) {
        res.status(500).json({message: err})
    }
    res.send("All Flights")
}


//Get a Flight
exports.getFlight = async (req, res) => {
    try {
        let id = req.params.id
        
        const flight = Flights.find((flight) => flight.id === id)
        res.status(200).json({
            message: 'Flight Found',
            flight
        })
    } catch (err) {
        res.status(500).json({message: err})
    }
    
}


//  Book a flight
exports.bookFlight = async (req, res) => {
    try {
        const {Title, Price} = await req.body
        const newFlight = {
            id: uuid(),
            Title,
            Price,
            Date: new Date().toLocaleDateString(),
            Time: new Date().toLocaleTimeString()
        }
        
        Flights.push(newFlight)
        
        res.status(200).json({
            message: 'Flight Booked',
            newFlight
        })
    } catch (err) {
        res.status(500).json({message: err.message})
    }  
}


//  Book a Reschdule flight
exports.updateFlight = async (req, res) => {
    try {
        
        let id = req.params.id
        const flight = Flights.find((flight) => flight.id === id)
        const {Title, Price} = await req.body
        flight.Title = Title
        flight.Price = Price
        
        res.status(200).json({
            message: 'Flight Updated',
            flight
        })
        
    } catch (err) {
        res.status(500).json({message: err.message})
    }  
}


// Delete Flight

exports.deleteFlight = async (req, res) => {
    try {
        
        let id = req.params.id
        const flight = Flights.find((flight) => flight.id === id)
        
        Flights.splice(Flights.indexOf(flight), 1)
        
        res.status(200).json({
            message: 'Flight Deleted',
            flight
        })
        
    } catch (err) {
        res.status(500).json({message: err.message})
    }  
}