let request = new XMLHttpRequest()
        request.open('GET','https://api.covid19india.org/data.json')
        request.send()

        request.addEventListener('load', function(){
            let data = JSON.parse(this.responseText)
            console.log(data)

            let total_cases = data.statewise[0].confirmed
            let total_deaths = data.statewise[0].deaths
            let total_racovery = data.statewise[0].recovered

            let cases = document.getElementById('cases_result')
            cases.innerHTML = total_cases

            let death = document.getElementById('death_result')
            death.innerHTML = total_deaths

            let recover = document.getElementById('recovery_result')
            recover.innerHTML = total_racovery

        })