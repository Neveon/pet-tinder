import React, { useReducer } from "react";
//import uuid from 'uuid';
import PetsContext from "./petsContext";
import petsReducer from "./petsReducer";

import {
    GET_PETS,
    LIKE_PET,
    DELETE_PET,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_PETS,
    CLEAR_FILTER,
    SET_ALERT,
    REMOVE_ALERT,
} from "../types";

const PetsState = (props) => {
    const initialState = {
        likedPets: [
            {
                id: 55203150,
                organization_id: "PA562",
                url: "https://www.petfinder.com/dog/jackie-in-the-box-society-55203150/pa/horsham/wags-rescue-and-referral-pa562/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Terrier",
                    secondary: null,
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: null,
                    secondary: null,
                    tertiary: null,
                },
                age: "Adult",
                gender: "Female",
                size: "Small",
                coat: null,
                attributes: {
                    spayed_neutered: true,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: true,
                    dogs: true,
                    cats: null,
                },
                tags: [],
                name: "JACKIE IN THE BOX SOCIETY",
                description:
                    "4/4/2022\nIntroducing Jackie in the Box....so named because she popped out of her crate to see what was going on,...",
                organization_animal_id: null,
                photos: [
                    {
                        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55203150/1/?bust=1649088951&width=100",
                        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55203150/1/?bust=1649088951&width=300",
                        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55203150/1/?bust=1649088951&width=600",
                        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55203150/1/?bust=1649088951",
                    },
                ],
                primary_photo_cropped: {
                    small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55203150/1/?bust=1649088951&width=300",
                    medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55203150/1/?bust=1649088951&width=450",
                    large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55203150/1/?bust=1649088951&width=600",
                    full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55203150/1/?bust=1649088951",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-04T16:15:52+0000",
                published_at: "2022-04-04T16:15:52+0000",
                distance: null,
                contact: {
                    email: "lovekitte@comcast.net",
                    phone: "(267) 238-7892",
                    address: {
                        address1: null,
                        address2: null,
                        city: "Horsham",
                        state: "PA",
                        postcode: "19044",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55203150",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/pa562",
                    },
                },
            },
        ],
    };

    const [state, dispatch] = useReducer(petsReducer, initialState);

    // Get Pets from petfinder

    // Like a Pet

    // Delete Liked Pet

    // Set Current Liked Pets

    // Clear Current Pet ? Not sure if this is needed

    // Filter Pets ? As if I am filtering pets that come up from petfinder? Dont want to show already liked pets

    // Clear Filter

    return (
        <PetsContext.Provider
            value={{
                likedPets: state.likedPets,
            }}
        >
            {props.children}
        </PetsContext.Provider>
    );
};

export default PetsState;
