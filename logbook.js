# Open Logbook Format v1.0

{
    "title": "Logbook Title",
    "date": 1325790025,
    "created_by": "Flight Time",
    "flights": [
        {
            "date": 1325790025,
            "to": "KPAO",
            "from": "KAPC",
            "enroute": ["KOAK", "KLVK"],
            "aircraft": {
                "type": "C172",
                "tailNumber": "N1234B",
                "remarks": "A short remarks string about the aircraft."
            },
            "remarks": "A remarks string containing details about the flight.",
            "fields": {
                "PIC": 4.5,
                "SIC": 0.0,
                "totalTime": 4.5,
                "approaches": 4,
                "takeoffs": 1,
                "landings": 1,
                "picCrossCountry": 0.0,
                "complex": 4.5,
                "nightTakeoffs": 0,
                "nightLandings": 0,
                "multiengine": 0.0,
                "crossCountry": 0.0,
                "night": 0.0,
                "instrument": 0.0,
                "simulatedInstrument": 0.0,
                "dualReceived": 0.0,
                "dualGiven": 0.0,
                "hobbs": 4563.2,
                "tach": 1234.3
            } 
        },
    ]
}