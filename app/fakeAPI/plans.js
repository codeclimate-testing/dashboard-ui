/**
 * Created by Darkstar on 12/5/2016.
 */
export default [
    {
        id: 1,
        label: "Free Plan",
        price: 0,
        priceDescription: "Forever",
        usage: [{
            category: "DATABASE",
            features: [{
                type: "text",
                name: "API Calls",
                limit: {
                    show: true,
                    label: "5,000",
                    value: 5000
                }
            }, {
                type: "text",
                name: "Storage",
                limit: {
                    show: true,
                    label: "200 MB",
                    value: 0.2
                }
            }]
        }, {
            category: "REALTIME",
            features: [{
                name: "Connections",
                type: "text",
                limit: {
                    show: true,
                    label: "500",
                    value: 500
                }
            }]
        }, {
            category: "MISC",
            features: [{
                name: "MongoDB Access",
                type: "boolean",
                limit: {
                    show: false,
                    label: "",
                    value: 0
                }
            }]
        }]
    }, {
        id: 2,
        label: "Launch Plan",
        price: 49,
        priceDescription: "per month",
        usage: [{
            category: "DATABASE",
            features: [{
                type: "text",
                name: "API Calls",
                limit: {
                    show: true,
                    label: "250,000",
                    value: 250000
                }
            }, {
                type: "text",
                name: "Storage",
                limit: {
                    show: true,
                    label: "5 GB",
                    value: 5
                }
            }]
        }, {
            category: "REALTIME",
            features: [{
                name: "Connections",
                type: "text",
                limit: {
                    show: true,
                    label: "500",
                    value: 500
                }
            }]
        }, {
            category: "MISC",
            features: [{
                name: "MongoDB Access",
                type: "boolean",
                limit: {
                    show: true,
                    label: "",
                    value: 1
                }
            }]
        }]
    }, {
        id: 3,
        label: "Bootstrap Plan",
        price: 149,
        priceDescription: "per month",
        usage: [{
            category: "DATABASE",
            features: [{
                type: "text",
                name: "API Calls",
                limit: {
                    show: true,
                    label: "1 MILLION",
                    value: 1000000
                }
            }, {
                type: "text",
                name: "Storage",
                limit: {
                    show: true,
                    label: "10 GB",
                    value: 10
                }
            }]
        }, {
            category: "REALTIME",
            features: [{
                name: "Connections",
                type: "text",
                limit: {
                    show: true,
                    label: "UNLIMITED",
                    value: 10000
                }
            }]
        }, {
            category: "MISC",
            features: [{
                name: "MongoDB Access",
                type: "boolean",
                limit: {
                    show: true,
                    label: "",
                    value: 1
                }
            }]
        }]
    }, {
        id: 4,
        label: "Scale Plan",
        price: 449,
        priceDescription: "per month",
        usage: [{
            category: "DATABASE",
            features: [{
                type: "text",
                name: "API Calls",
                limit: {
                    show: true,
                    label: "5 MILLION",
                    value: 5000000
                }
            }, {
                type: "text",
                name: "Storage",
                limit: {
                    show: true,
                    label: "30 GB",
                    value: 30
                }
            }]
        }, {
            category: "REALTIME",
            features: [{
                name: "Connections",
                type: "text",
                limit: {
                    show: true,
                    label: "UNLIMITED",
                    value: 10000
                }
            }]
        }, {
            category: "MISC",
            features: [{
                name: "MongoDB Access",
                type: "boolean",
                limit: {
                    show: true,
                    label: "",
                    value: 1
                }
            }]
        }]
    }, {
        id: 5,
        label: "Unicorn Plan",
        price: 1449,
        priceDescription: "per month",
        usage: [{
            category: "DATABASE",
            features: [{
                type: "text",
                name: "API Calls",
                limit: {
                    show: true,
                    label: "10 MILLION",
                    value: 10000000
                }
            }, {
                type: "text",
                name: "Storage",
                limit: {
                    show: true,
                    label: "100 GB",
                    value: 100
                }
            }]
        }, {
            category: "REALTIME",
            features: [{
                name: "Connections",
                type: "text",
                limit: {
                    show: true,
                    label: "UNLIMITED",
                    value: 10000
                }
            }]
        }, {
            category: "MISC",
            features: [{
                name: "MongoDB Access",
                type: "boolean",
                limit: {
                    show: true,
                    label: "",
                    value: 1
                }
            }]
        }]
    }
]