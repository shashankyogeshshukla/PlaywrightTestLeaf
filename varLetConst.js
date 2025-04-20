const browserVersion = 'Chrome'

function getBrowserVersion(){
    if (browserVersion=='Chrome'){
        let browserVersion = 'Version 123'
        console.log('Local browser version inside function is '+browserVersion)
    }
}

getBrowserVersion()