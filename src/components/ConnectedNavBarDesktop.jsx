import PropTypes from "prop-types";
import React, {Component} from "react";
import {
    Button,
    Container,
    Image,
    Menu,
    Responsive,
    Segment,
    Visibility
} from "semantic-ui-react";

import "./NavBar.css";
import logoLinear from "./logo_linear.jpeg";

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
export default class DesktopConnectedNavBarContainer extends Component {
    state = {};

    hideFixedMenu = () => this.setState({fixed: false});
    showFixedMenu = () => this.setState({fixed: true});

    render() {
        const {children} = this.props;
        const {fixed} = this.state;

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign="center"
                        style={{padding: "0.2em 0em 0.2em 0em"}}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? "top" : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size="medium"
                        >
                            <Container fluid>
                                <Image size='tiny' src={logoLinear} style={{ marginRight: '1.5em' }} wrapped/>
                                <Menu.Item as="a" active href="./" color="red">
                                    Accueil
                                </Menu.Item>
                                <Menu.Item as="a" active href="./enregistrement" color="green">
                                    Entreprises
                                </Menu.Item>
                                <Menu.Item as="a" active href="./membres" color="red">
                                    Membres
                                </Menu.Item>
                                <Menu.Item as="a" active href="./annuaire" color="green">
                                    Annuaire
                                </Menu.Item>
                                <Menu.Item position="right">
                                    <Button as="a" inverted={!fixed} href="./connexion">
                                        Connectez-vous
                                    </Button>
                                    <Button
                                        as="a"
                                        inverted={!fixed}
                                        style={{marginLeft: "0.5em"}}
                                    >
                                        Enregistrez-vous
                                    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        );
    }
}

DesktopConnectedNavBarContainer.propTypes = {
    children: PropTypes.node
};