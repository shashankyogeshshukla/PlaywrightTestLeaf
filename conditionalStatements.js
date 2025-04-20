let browserName = 'Chrome'

function launchBrowser (browserName){
    if (browserName=='Chrome'){
        console.log('The browser name is '+browserName)
    }
    else{
        console.log('The browser is not Chrome')
    }
}

launchBrowser(browserName)