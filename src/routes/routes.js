import React from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import FirstSlide from '../containers/firstSlide'
import SeccondSlide from '../containers/seccondSlider'
import ThirdSlide from '../containers/thirdSlider'
import ForthSlide from '../containers/fourthSlider'
import FifthSlide from '../containers/fifthSlider'
import FirstPage from '../cadastros/firstPage'


function Routes() {

    return(
        <Router>
            <Switch>
                <Route exact component={FirstSlide} path='/' />
                <Route exact component={SeccondSlide} path='/seccond' />
                <Route exact component={ThirdSlide} path='/third' />
                <Route exact component={ForthSlide} path='/fourth' />
                <Route exact component={FifthSlide} path='/fifth' />
                <Route exact component={FirstPage} path='/firstPageCadastros' />
            </Switch>
        </Router>
    )
}

export default Routes