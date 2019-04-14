<template>
<div>
    <section class="welcome">
        <div class="container">
            <h1 class="big">
                Find Brokers Using Facts
            </h1>
            <div>
                <router-link to="/survey">
                    <b-button type="is-warning" class="find-broker" >Find me a broker/firm</b-button> 
                </router-link>
                <div class="inline">or</div>
                <div class="search-holder">
                    <input class="broker-name" placeholder="I know my broker/firm" />
                    <input class="zip-code" placeholder="Zip (optional)" />
                    <b-button class="search-button" type="is-warning">
                        <img src="/static/search.svg" />
                    </b-button>
                </div>
            </div>
        </div>
    </section>
    <section class="info">
        <div class="container">
            <h1>
                Why use BrokerHunt
            </h1>
            <p>
                Use BrokerHunt to find yourself a broker or broker firm to help you with your investment decisions. BrokerHunt also provides you a snapshot of a broker’s employment history, regulatory actions, and investment-related licensing information, arbitrations and complaints. This a great tool for you to make informed decisions about your investment advisors.
            </p>
        </div>
    </section>
    <section class="investment-101">
        <div class="container">
            <h1>Investment 101</h1>
        </div>
    </section>

    <div id="footer">
        <p>© 2019 by BrokerHunt. All rights reserved.</p>
    </div>
</div>
</template>

<script>
// const axios = require('axios')
// import Datamap from 'Datamaps'
// import * as d3 from 'd3'
var states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

export default {
    data() {
        return {
            isLoading: false,
            isFullPage: true
        }
    },
    mounted() {
        // var map = new Datamap({
        //         element: document.getElementById('container'),
        //         scope: 'usa',
        // })


        // var stateCounts = [];
        // axios.get('./static/data/IA_FIRM_SEC_Feed_04_11_2019.xml').then(response => {
        //     var parser = new DOMParser();
        //     var xmlDoc = parser.parseFromString(response.data,"text/xml");
        //     for (var i = 0; i < states.length; i++) {
        //         console.log('MainAddr[State="'+states[i]+'"]')
        //         var node = xmlDoc.querySelectorAll('MainAddr[State="'+states[i]+'"]')
        //         var obj = {}
        //         obj[states[i]] = {
        //             count: node.length
        //         }
        //         stateCounts.push(obj)
        //     }
        //     console.log(stateCounts);

        //     // map.data = stateCounts;
        // })
        
    },
    created() {
        
        
    }
}
</script>

<style lang="scss">
#container {
    height: 800px;
}

section {
    padding: 100px 0; 
    h1 {
        font-size: 45px;
        text-align: center;
        font-weight: bold;
    }
    p {
        font-size: 20px;
        max-width: 715px;
        margin: 20px auto;
    }

    &.investment-101 {
        background-color: #FAFAFA;
    }
    
}

.find-broker {
    font-weight: bold;
    font-size: 14px;
}
section.welcome {
    background: url('/static/home.png') center no-repeat;
    background-size: cover;
    padding: 170px 0;
    text-align: center;
    color: #fff;

    h1.big {
        text-transform: uppercase;
        font-size: 45px;
        font-weight: bold;
        letter-spacing: 1px;
    }

    .inline {
        display: inline-block;
        vertical-align: top;
        padding: 13px 15px;
        text-transform: uppercase;
        font-size: 14px;
    }
    .find-broker {
        padding: 0 10px;
        height: 48px;
    }
    .search-holder {
        display: inline-block;
        vertical-align: top;
        background: #fff;
        input {
            border: none;
            font-size: 14px;
            padding: 15px 12px 16px;
            &.broker-name {
                width: 290px;
            }
            &.zip-code {
                width: 140px;
                position: relative;
                border-left: 1px solid #CCCCCC;
            }
        }
        .search-button {
            height: 48px;
            border-radius: 0;
            padding: 11px;
        }
    }
}

#footer {
    color: #999999;
    text-align: center;
    background-color: #000;
    padding: 20px 0;
}
</style>