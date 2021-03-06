import React, { useReducer } from "react";
import PetsContext from "./PetsContext";
import petsReducer from "./petsReducer";

import { GET_PETS, LIKE_PET, DELETE_PET, SET_ALERT, REMOVE_ALERT, UPDATE_PETS } from "../types";

const PetsState = (props) => {
    const initialState = {
        // pets adopted is filled every GET request to the petfinder api
        petsForAdoption: [
            {
                id: 55300291,
                organization_id: "NY1493",
                url:
                    "https://www.petfinder.com/dog/ronald-55300291/ny/larchmont/trina-and-friends-k9-rescue-ny1493/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "German Shepherd Dog",
                    secondary: "Greyhound",
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: "Black",
                    secondary: null,
                    tertiary: null,
                },
                age: "Young",
                gender: "Male",
                size: "Medium",
                coat: "Medium",
                attributes: {
                    spayed_neutered: true,
                    house_trained: true,
                    declawed: null,
                    special_needs: false,
                    shots_current: false,
                },
                environment: {
                    children: true,
                    dogs: true,
                    cats: true,
                },
                tags: [
                    "Friendly",
                    "Affectionate",
                    "Playful",
                    "Funny",
                    "Athletic",
                    "Smart",
                    "Brave",
                ],
                name: "Ronald",
                description:
                    "Ronald is an approximately 2 year old neutered male  GSD/greyhound mix. He is about 30-35 lbs and will not grow...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/1/?bust=1649953569&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/1/?bust=1649953569&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/1/?bust=1649953569&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/1/?bust=1649953569",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/2/?bust=1649953570&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/2/?bust=1649953570&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/2/?bust=1649953570&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/2/?bust=1649953570",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/3/?bust=1649953571&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/3/?bust=1649953571&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/3/?bust=1649953571&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/3/?bust=1649953571",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/4/?bust=1649953571&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/4/?bust=1649953571&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/4/?bust=1649953571&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/4/?bust=1649953571",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/1/?bust=1649953569&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/1/?bust=1649953569&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/1/?bust=1649953569&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300291/1/?bust=1649953569",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T16:26:13+0000",
                published_at: "2022-04-14T16:26:13+0000",
                distance: 33.4065,
                contact: {
                    email: "trinafriendsk9rescue@gmail.com",
                    phone: null,
                    address: {
                        address1: null,
                        address2: null,
                        city: "Larchmont ",
                        state: "NY",
                        postcode: "10538",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55300291",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/ny1493",
                    },
                },
            },
            {
                id: 55300268,
                organization_id: "PA406",
                url:
                    "https://www.petfinder.com/dog/titan-55300268/pa/stroudsburg/camp-papillon-animal-shelter-pa406/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "German Shepherd Dog",
                    secondary: null,
                    mixed: false,
                    unknown: false,
                },
                colors: {
                    primary: null,
                    secondary: null,
                    tertiary: null,
                },
                age: "Young",
                gender: "Male",
                size: "Medium",
                coat: null,
                attributes: {
                    spayed_neutered: true,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: false,
                },
                environment: {
                    children: null,
                    dogs: null,
                    cats: null,
                },
                tags: [],
                name: "Titan",
                description:
                    "You can fill out an adoption application online on our official website.\n\nIf you would like to take me home...",
                organization_animal_id: "17939498-D220024",
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300268/1/?bust=1649954086&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300268/1/?bust=1649954086&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300268/1/?bust=1649954086&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300268/1/?bust=1649954086",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300268/1/?bust=1649954086&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300268/1/?bust=1649954086&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300268/1/?bust=1649954086&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300268/1/?bust=1649954086",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T16:24:39+0000",
                published_at: "2022-04-14T16:24:39+0000",
                distance: 58.7091,
                contact: {
                    email: "adopt@camppapillon.org",
                    phone: "570-420-0450",
                    address: {
                        address1: "128 Brainerd Lane",
                        address2: null,
                        city: "Stroudsburg",
                        state: "PA",
                        postcode: "18360",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55300268",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/pa406",
                    },
                },
            },
            {
                id: 55300232,
                organization_id: "NY121",
                url:
                    "https://www.petfinder.com/dog/sasha-55300232/ny/hyde-park/dutchess-county-spca-ny121/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Mixed Breed",
                    secondary: null,
                    mixed: false,
                    unknown: false,
                },
                colors: {
                    primary: null,
                    secondary: null,
                    tertiary: null,
                },
                age: "Adult",
                gender: "Female",
                size: "Large",
                coat: null,
                attributes: {
                    spayed_neutered: true,
                    house_trained: false,
                    declawed: null,
                    special_needs: true,
                    shots_current: true,
                },
                environment: {
                    children: null,
                    dogs: false,
                    cats: null,
                },
                tags: [],
                name: "Sasha",
                description:
                    "Meet Sasha! This sweet docile girl is looking for her furrever home. At 8 years old, she&amp;#39;s well over the...",
                organization_animal_id: "S2022358",
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300232/1/?bust=1649953916&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300232/1/?bust=1649953916&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300232/1/?bust=1649953916&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300232/1/?bust=1649953916",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300232/1/?bust=1649953916&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300232/1/?bust=1649953916&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300232/1/?bust=1649953916&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300232/1/?bust=1649953916",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T16:21:51+0000",
                published_at: "2022-04-14T16:21:51+0000",
                distance: 79.4542,
                contact: {
                    email: "adoptions@dcspca.org",
                    phone: "(845) 452-7722",
                    address: {
                        address1: "636 Violet Avenue",
                        address2: null,
                        city: "Hyde Park",
                        state: "NY",
                        postcode: "12538",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55300232",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/ny121",
                    },
                },
            },
            {
                id: 55300233,
                organization_id: "NY121",
                url:
                    "https://www.petfinder.com/dog/roo-55300233/ny/hyde-park/dutchess-county-spca-ny121/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Mixed Breed",
                    secondary: null,
                    mixed: false,
                    unknown: false,
                },
                colors: {
                    primary: null,
                    secondary: null,
                    tertiary: null,
                },
                age: "Adult",
                gender: "Female",
                size: "Medium",
                coat: null,
                attributes: {
                    spayed_neutered: true,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: null,
                    dogs: null,
                    cats: null,
                },
                tags: [],
                name: "Roo",
                description:
                    "Meet Roo! Roo is a 4 year old mixed breed. She is extremely scared and is looking for someone that...",
                organization_animal_id: "S20214450",
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300233/1/?bust=1649953916&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300233/1/?bust=1649953916&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300233/1/?bust=1649953916&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300233/1/?bust=1649953916",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300233/2/?bust=1649953916&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300233/2/?bust=1649953916&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300233/2/?bust=1649953916&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300233/2/?bust=1649953916",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300233/1/?bust=1649953916&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300233/1/?bust=1649953916&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300233/1/?bust=1649953916&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300233/1/?bust=1649953916",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T16:21:51+0000",
                published_at: "2022-04-14T16:21:51+0000",
                distance: 79.4542,
                contact: {
                    email: "adoptions@dcspca.org",
                    phone: "(845) 452-7722",
                    address: {
                        address1: "636 Violet Avenue",
                        address2: null,
                        city: "Hyde Park",
                        state: "NY",
                        postcode: "12538",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55300233",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/ny121",
                    },
                },
            },
            // {
            //     id: 55300208,
            //     organization_id: "DE15",
            //     url: "https://www.petfinder.com/dog/diamond-55300208/de/newark/delaware-spca-de15/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
            //     type: "Dog",
            //     species: "Dog",
            //     breeds: {
            //         primary: "Pit Bull Terrier",
            //         secondary: null,
            //         mixed: false,
            //         unknown: false,
            //     },
            //     colors: {
            //         primary: "Yellow / Tan / Blond / Fawn",
            //         secondary: "White / Cream",
            //         tertiary: null,
            //     },
            //     age: "Adult",
            //     gender: "Female",
            //     size: "Medium",
            //     coat: null,
            //     attributes: {
            //         spayed_neutered: true,
            //         house_trained: false,
            //         declawed: null,
            //         special_needs: false,
            //         shots_current: true,
            //     },
            //     environment: {
            //         children: null,
            //         dogs: null,
            //         cats: null,
            //     },
            //     tags: [],
            //     name: "Diamond",
            //     description: null,
            //     organization_animal_id: "DEL-A-13686",
            //     photos: [
            //         {
            //             small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300208/1/?bust=1649953822&width=100",
            //             medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300208/1/?bust=1649953822&width=300",
            //             large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300208/1/?bust=1649953822&width=600",
            //             full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300208/1/?bust=1649953822",
            //         },
            //     ],
            //     primary_photo_cropped: {
            //         small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300208/1/?bust=1649953822&width=300",
            //         medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300208/1/?bust=1649953822&width=450",
            //         large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300208/1/?bust=1649953822&width=600",
            //         full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300208/1/?bust=1649953822",
            //     },
            //     videos: [],
            //     status: "adoptable",
            //     status_changed_at: "2022-04-14T16:20:08+0000",
            //     published_at: "2022-04-14T16:20:08+0000",
            //     distance: 98.5747,
            //     contact: {
            //         email: null,
            //         phone: "(302) 998-2281",
            //         address: {
            //             address1: "455 Stanton Christiana Road",
            //             address2: null,
            //             city: "Newark",
            //             state: "DE",
            //             postcode: "19713",
            //             country: "US",
            //         },
            //     },
            //     _links: {
            //         self: {
            //             href: "/v2/animals/55300208",
            //         },
            //         type: {
            //             href: "/v2/types/dog",
            //         },
            //         organization: {
            //             href: "/v2/organizations/de15",
            //         },
            //     },
            // },
            {
                id: 55300206,
                organization_id: "DE15",
                url:
                    "https://www.petfinder.com/dog/champan-55300206/de/newark/delaware-spca-de15/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Parson Russell Terrier",
                    secondary: "Chihuahua",
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: "Brown / Chocolate",
                    secondary: "White / Cream",
                    tertiary: null,
                },
                age: "Young",
                gender: "Male",
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
                    children: null,
                    dogs: null,
                    cats: null,
                },
                tags: [],
                name: "Champan",
                description: null,
                organization_animal_id: "DEL-A-13749",
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300206/1/?bust=1649953822&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300206/1/?bust=1649953822&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300206/1/?bust=1649953822&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300206/1/?bust=1649953822",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300206/1/?bust=1649953822&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300206/1/?bust=1649953822&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300206/1/?bust=1649953822&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300206/1/?bust=1649953822",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T16:20:07+0000",
                published_at: "2022-04-14T16:20:07+0000",
                distance: 98.5747,
                contact: {
                    email: null,
                    phone: "(302) 998-2281",
                    address: {
                        address1: "455 Stanton Christiana Road",
                        address2: null,
                        city: "Newark",
                        state: "DE",
                        postcode: "19713",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55300206",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/de15",
                    },
                },
            },
            {
                id: 55300205,
                organization_id: "DE15",
                url:
                    "https://www.petfinder.com/dog/titus-55300205/de/newark/delaware-spca-de15/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Mixed Breed",
                    secondary: null,
                    mixed: false,
                    unknown: false,
                },
                colors: {
                    primary: "Black",
                    secondary: "White / Cream",
                    tertiary: null,
                },
                age: "Young",
                gender: "Male",
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
                    children: null,
                    dogs: null,
                    cats: null,
                },
                tags: [],
                name: "Titus",
                description: null,
                organization_animal_id: "DEL-A-11990",
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/1/?bust=1649953820&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/1/?bust=1649953820&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/1/?bust=1649953820&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/1/?bust=1649953820",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/2/?bust=1649953820&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/2/?bust=1649953820&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/2/?bust=1649953820&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/2/?bust=1649953820",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/3/?bust=1649953820&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/3/?bust=1649953820&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/3/?bust=1649953820&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/3/?bust=1649953820",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/4/?bust=1649953822&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/4/?bust=1649953822&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/4/?bust=1649953822&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/4/?bust=1649953822",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/1/?bust=1649953820&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/1/?bust=1649953820&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/1/?bust=1649953820&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300205/1/?bust=1649953820",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T16:20:07+0000",
                published_at: "2022-04-14T16:20:07+0000",
                distance: 98.5747,
                contact: {
                    email: null,
                    phone: "(302) 998-2281",
                    address: {
                        address1: "455 Stanton Christiana Road",
                        address2: null,
                        city: "Newark",
                        state: "DE",
                        postcode: "19713",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55300205",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/de15",
                    },
                },
            },
            {
                id: 55300207,
                organization_id: "DE15",
                url:
                    "https://www.petfinder.com/dog/brigitte-55300207/de/newark/delaware-spca-de15/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Pit Bull Terrier",
                    secondary: null,
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: "Brown / Chocolate",
                    secondary: null,
                    tertiary: null,
                },
                age: "Young",
                gender: "Female",
                size: "Medium",
                coat: null,
                attributes: {
                    spayed_neutered: true,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: null,
                    dogs: null,
                    cats: null,
                },
                tags: [],
                name: "Brigitte",
                description: null,
                organization_animal_id: "DEL-A-13748",
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300207/1/?bust=1649953824&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300207/1/?bust=1649953824&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300207/1/?bust=1649953824&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300207/1/?bust=1649953824",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300207/1/?bust=1649953824&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300207/1/?bust=1649953824&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300207/1/?bust=1649953824&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300207/1/?bust=1649953824",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T16:20:07+0000",
                published_at: "2022-04-14T16:20:07+0000",
                distance: 98.5747,
                contact: {
                    email: null,
                    phone: "(302) 998-2281",
                    address: {
                        address1: "455 Stanton Christiana Road",
                        address2: null,
                        city: "Newark",
                        state: "DE",
                        postcode: "19713",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55300207",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/de15",
                    },
                },
            },
            {
                id: 55300112,
                organization_id: "NY1417",
                url:
                    "https://www.petfinder.com/dog/sergei-55300112/ny/yaphank/new-york-safe-haven-animal-rescue-ny1417/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Rottweiler",
                    secondary: null,
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: "Tricolor (Brown, Black, & White)",
                    secondary: null,
                    tertiary: null,
                },
                age: "Baby",
                gender: "Male",
                size: "Medium",
                coat: "Short",
                attributes: {
                    spayed_neutered: false,
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
                name: "Sergei ",
                description:
                    "**Please Note: The breed listed is an educated guess. All of our dogs are rescues from Puerto Rico, often referred...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300112/1/?bust=1649952667&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300112/1/?bust=1649952667&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300112/1/?bust=1649952667&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300112/1/?bust=1649952667",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300112/1/?bust=1649952667&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300112/1/?bust=1649952667&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300112/1/?bust=1649952667&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300112/1/?bust=1649952667",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T16:11:09+0000",
                published_at: "2022-04-14T16:11:09+0000",
                distance: 71.4451,
                contact: {
                    email: "sharofny@gmail.com",
                    phone: null,
                    address: {
                        address1: null,
                        address2: null,
                        city: "Yaphank",
                        state: "NY",
                        postcode: "11980",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55300112",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/ny1417",
                    },
                },
            },
            {
                id: 55300100,
                organization_id: "NY1417",
                url:
                    "https://www.petfinder.com/dog/pops-55300100/ny/yaphank/new-york-safe-haven-animal-rescue-ny1417/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Rottweiler",
                    secondary: null,
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: "Tricolor (Brown, Black, & White)",
                    secondary: null,
                    tertiary: null,
                },
                age: "Baby",
                gender: "Male",
                size: "Medium",
                coat: "Short",
                attributes: {
                    spayed_neutered: false,
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
                name: "Pops",
                description:
                    "**Please Note: The breed listed is an educated guess. All of our dogs are rescues from Puerto Rico, often referred...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300100/1/?bust=1649952525&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300100/1/?bust=1649952525&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300100/1/?bust=1649952525&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300100/1/?bust=1649952525",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300100/2/?bust=1649952526&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300100/2/?bust=1649952526&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300100/2/?bust=1649952526&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300100/2/?bust=1649952526",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300100/3/?bust=1649952527&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300100/3/?bust=1649952527&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300100/3/?bust=1649952527&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300100/3/?bust=1649952527",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300100/1/?bust=1649952525&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300100/1/?bust=1649952525&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300100/1/?bust=1649952525&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300100/1/?bust=1649952525",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T16:08:49+0000",
                published_at: "2022-04-14T16:08:49+0000",
                distance: 71.4451,
                contact: {
                    email: "sharofny@gmail.com",
                    phone: null,
                    address: {
                        address1: null,
                        address2: null,
                        city: "Yaphank",
                        state: "NY",
                        postcode: "11980",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55300100",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/ny1417",
                    },
                },
            },
            {
                id: 55300015,
                organization_id: "NJ995",
                url:
                    "https://www.petfinder.com/dog/ikarus-55300015/nj/lake-hopatcong/save-the-satos-nj995/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Papillon",
                    secondary: null,
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: "Brown / Chocolate",
                    secondary: "Gray / Blue / Silver",
                    tertiary: "White / Cream",
                },
                age: "Baby",
                gender: "Male",
                size: "Small",
                coat: "Short",
                attributes: {
                    spayed_neutered: false,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: true,
                    dogs: true,
                    cats: true,
                },
                tags: [
                    "Friendly",
                    "Affectionate",
                    "Gentle",
                    "Playful",
                    "Smart",
                    "Funny",
                    "Athletic",
                    "Loves kisses",
                ],
                name: "Ikarus",
                description:
                    "Ikarus is a part of a litter of 4 born to a neglected Papillion mix.  The owner surrendered them to...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300015/1/?bust=1649952348&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300015/1/?bust=1649952348&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300015/1/?bust=1649952348&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300015/1/?bust=1649952348",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300015/1/?bust=1649952348&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300015/1/?bust=1649952348&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300015/1/?bust=1649952348&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55300015/1/?bust=1649952348",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T16:05:49+0000",
                published_at: "2022-04-14T16:05:49+0000",
                distance: 28.8603,
                contact: {
                    email: "info@savethesatos.org",
                    phone: "(973) 288-1934",
                    address: {
                        address1: "5 Bowling Green Parkway",
                        address2: "Suite 13",
                        city: "Lake Hopatcong",
                        state: "NJ",
                        postcode: "07849",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55300015",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/nj995",
                    },
                },
            },
            {
                id: 55299832,
                organization_id: "PA802",
                url:
                    "https://www.petfinder.com/dog/chaos-55299832/pa/philadelphia/animal-care-and-control-team-of-philadelphia-pa802/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Mixed Breed",
                    secondary: null,
                    mixed: false,
                    unknown: false,
                },
                colors: {
                    primary: "Red / Chestnut / Orange",
                    secondary: null,
                    tertiary: null,
                },
                age: "Senior",
                gender: "Male",
                size: "Medium",
                coat: null,
                attributes: {
                    spayed_neutered: true,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: null,
                    dogs: null,
                    cats: null,
                },
                tags: [],
                name: "Chaos",
                description:
                    "CHAOS ACCT-A-111093 is currently considered urgent and at risk of euthanasia due to medical concerns. Chaos must have confirmed placement...",
                organization_animal_id: "ACCT-A-111093",
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/1/?bust=1649951718&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/1/?bust=1649951718&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/1/?bust=1649951718&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/1/?bust=1649951718",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/2/?bust=1649951724&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/2/?bust=1649951724&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/2/?bust=1649951724&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/2/?bust=1649951724",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/3/?bust=1649951725&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/3/?bust=1649951725&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/3/?bust=1649951725&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/3/?bust=1649951725",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/4/?bust=1649951723&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/4/?bust=1649951723&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/4/?bust=1649951723&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/4/?bust=1649951723",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/1/?bust=1649951718&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/1/?bust=1649951718&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/1/?bust=1649951718&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299832/1/?bust=1649951718",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T15:45:14+0000",
                published_at: "2022-04-14T15:45:14+0000",
                distance: 62.8357,
                contact: {
                    email: "adopt@acctphilly.org",
                    phone: "(267) 385-3800",
                    address: {
                        address1: "111 W. Hunting Park Ave.",
                        address2: null,
                        city: "Philadelphia",
                        state: "PA",
                        postcode: "19140",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299832",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/pa802",
                    },
                },
            },
            // {
            //     id: 55299831,
            //     organization_id: "PA802",
            //     url: "https://www.petfinder.com/dog/lexie-55299831/pa/philadelphia/animal-care-and-control-team-of-philadelphia-pa802/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
            //     type: "Dog",
            //     species: "Dog",
            //     breeds: {
            //         primary: "Hound",
            //         secondary: null,
            //         mixed: false,
            //         unknown: false,
            //     },
            //     colors: {
            //         primary: "White / Cream",
            //         secondary: null,
            //         tertiary: null,
            //     },
            //     age: "Adult",
            //     gender: "Female",
            //     size: "Large",
            //     coat: null,
            //     attributes: {
            //         spayed_neutered: true,
            //         house_trained: false,
            //         declawed: null,
            //         special_needs: false,
            //         shots_current: true,
            //     },
            //     environment: {
            //         children: false,
            //         dogs: null,
            //         cats: null,
            //     },
            //     tags: ["Adult Only Home Preferred", "Lived with Cats", "Lived with Dogs"],
            //     name: "Lexie",
            //     description: null,
            //     organization_animal_id: "ACCT-A-111085",
            //     photos: [],
            //     primary_photo_cropped: null,
            //     videos: [],
            //     status: "adoptable",
            //     status_changed_at: "2022-04-14T15:45:13+0000",
            //     published_at: "2022-04-14T15:45:13+0000",
            //     distance: 62.8357,
            //     contact: {
            //         email: "adopt@acctphilly.org",
            //         phone: "(267) 385-3800",
            //         address: {
            //             address1: "111 W. Hunting Park Ave.",
            //             address2: null,
            //             city: "Philadelphia",
            //             state: "PA",
            //             postcode: "19140",
            //             country: "US",
            //         },
            //     },
            //     _links: {
            //         self: {
            //             href: "/v2/animals/55299831",
            //         },
            //         type: {
            //             href: "/v2/types/dog",
            //         },
            //         organization: {
            //             href: "/v2/organizations/pa802",
            //         },
            //     },
            // },
            {
                id: 55299830,
                organization_id: "PA802",
                url:
                    "https://www.petfinder.com/dog/sossie-55299830/pa/philadelphia/animal-care-and-control-team-of-philadelphia-pa802/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Chihuahua",
                    secondary: null,
                    mixed: false,
                    unknown: false,
                },
                colors: {
                    primary: "Black",
                    secondary: "White / Cream",
                    tertiary: null,
                },
                age: "Senior",
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
                    children: null,
                    dogs: null,
                    cats: null,
                },
                tags: [],
                name: "Sossie",
                description: null,
                organization_animal_id: "ACCT-A-111910",
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299830/1/?bust=1649951727&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299830/1/?bust=1649951727&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299830/1/?bust=1649951727&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299830/1/?bust=1649951727",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299830/1/?bust=1649951727&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299830/1/?bust=1649951727&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299830/1/?bust=1649951727&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299830/1/?bust=1649951727",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T15:45:13+0000",
                published_at: "2022-04-14T15:45:13+0000",
                distance: 62.8357,
                contact: {
                    email: "adopt@acctphilly.org",
                    phone: "(267) 385-3800",
                    address: {
                        address1: "111 W. Hunting Park Ave.",
                        address2: null,
                        city: "Philadelphia",
                        state: "PA",
                        postcode: "19140",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299830",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/pa802",
                    },
                },
            },
            {
                id: 55299825,
                organization_id: "NY352",
                url:
                    "https://www.petfinder.com/dog/kane-55299825/ny/nanuet/northstar-placement-ny352/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Plott Hound",
                    secondary: null,
                    mixed: false,
                    unknown: false,
                },
                colors: {
                    primary: "Brindle",
                    secondary: "Brown / Chocolate",
                    tertiary: null,
                },
                age: "Young",
                gender: "Male",
                size: "Medium",
                coat: "Short",
                attributes: {
                    spayed_neutered: true,
                    house_trained: true,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: true,
                    dogs: true,
                    cats: true,
                },
                tags: ["Friendly", "Funny", "Gentle", "Smart"],
                name: "Kane",
                description:
                    "This is Kane ???\n\n   A foster favorite and heart slayer ????\n\nKane is an 18 month old plott hound mix...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/1/?bust=1649951049&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/1/?bust=1649951049&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/1/?bust=1649951049&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/1/?bust=1649951049",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/2/?bust=1649951050&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/2/?bust=1649951050&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/2/?bust=1649951050&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/2/?bust=1649951050",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/3/?bust=1649951050&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/3/?bust=1649951050&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/3/?bust=1649951050&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/3/?bust=1649951050",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/4/?bust=1649951051&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/4/?bust=1649951051&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/4/?bust=1649951051&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/4/?bust=1649951051",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/5/?bust=1649951052&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/5/?bust=1649951052&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/5/?bust=1649951052&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/5/?bust=1649951052",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/6/?bust=1649951052&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/6/?bust=1649951052&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/6/?bust=1649951052&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/6/?bust=1649951052",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/1/?bust=1649951049&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/1/?bust=1649951049&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/1/?bust=1649951049&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299825/1/?bust=1649951049",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T15:44:14+0000",
                published_at: "2022-04-14T15:44:14+0000",
                distance: 34.4686,
                contact: {
                    email: "2ndchancepets@gmail.com",
                    phone: "(914) 407-2144",
                    address: {
                        address1: "P O Box 172",
                        address2: "Congers",
                        city: "Nanuet",
                        state: "NY",
                        postcode: "10954",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299825",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/ny352",
                    },
                },
            },
            {
                id: 55299669,
                organization_id: "PA718",
                url:
                    "https://www.petfinder.com/dog/cali-55299669/pa/schnecksville/starting-over-animal-rescue-pa718/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Labrador Retriever",
                    secondary: null,
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: "Yellow / Tan / Blond / Fawn",
                    secondary: null,
                    tertiary: null,
                },
                age: "Young",
                gender: "Female",
                size: "Medium",
                coat: "Short",
                attributes: {
                    spayed_neutered: true,
                    house_trained: true,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: null,
                    dogs: null,
                    cats: null,
                },
                tags: [],
                name: "Cali",
                description:
                    "Meet Ms Cali, she is a 1 1/2 year old lab mix that is looking for her new home. Cali...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299669/1/?bust=1649950630&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299669/1/?bust=1649950630&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299669/1/?bust=1649950630&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299669/1/?bust=1649950630",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299669/2/?bust=1649950631&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299669/2/?bust=1649950631&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299669/2/?bust=1649950631&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299669/2/?bust=1649950631",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299669/3/?bust=1649950632&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299669/3/?bust=1649950632&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299669/3/?bust=1649950632&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299669/3/?bust=1649950632",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299669/1/?bust=1649950630&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299669/1/?bust=1649950630&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299669/1/?bust=1649950630&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299669/1/?bust=1649950630",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T15:37:13+0000",
                published_at: "2022-04-14T15:37:13+0000",
                distance: 71.4595,
                contact: {
                    email: "kitkat03@comcast.net",
                    phone: null,
                    address: {
                        address1: "P.O. BOX 286",
                        address2: "P.O. BOX 286",
                        city: "Schnecksville",
                        state: "PA",
                        postcode: "18078",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299669",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/pa718",
                    },
                },
            },
            {
                id: 55299529,
                organization_id: "NJ769",
                url:
                    "https://www.petfinder.com/dog/brownie-55299529/nj/south-plainfield/jersey-girls-animal-rescue-nj769/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "American Staffordshire Terrier",
                    secondary: "Pit Bull Terrier",
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: "Brindle",
                    secondary: "Brown / Chocolate",
                    tertiary: null,
                },
                age: "Adult",
                gender: "Male",
                size: "Large",
                coat: "Short",
                attributes: {
                    spayed_neutered: true,
                    house_trained: true,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: true,
                    dogs: true,
                    cats: true,
                },
                tags: ["Friendly", "Smart", "Affectionate", "Playful"],
                name: "Brownie",
                description:
                    "Meet Brownie! Brownie was chained outside in the frozen mud when he was found and rescued. He is now safe...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/1/?bust=1649950404&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/1/?bust=1649950404&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/1/?bust=1649950404&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/1/?bust=1649950404",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/2/?bust=1649950405&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/2/?bust=1649950405&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/2/?bust=1649950405&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/2/?bust=1649950405",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/3/?bust=1649950406&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/3/?bust=1649950406&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/3/?bust=1649950406&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/3/?bust=1649950406",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/4/?bust=1649950406&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/4/?bust=1649950406&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/4/?bust=1649950406&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/4/?bust=1649950406",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/5/?bust=1649950407&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/5/?bust=1649950407&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/5/?bust=1649950407&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/5/?bust=1649950407",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/6/?bust=1649950408&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/6/?bust=1649950408&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/6/?bust=1649950408&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/6/?bust=1649950408",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/1/?bust=1649950404&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/1/?bust=1649950404&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/1/?bust=1649950404&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299529/1/?bust=1649950404",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T15:33:29+0000",
                published_at: "2022-04-14T15:33:29+0000",
                distance: 9.6713,
                contact: {
                    email: "jerseygirlsanimalrescue@gmail.com",
                    phone: null,
                    address: {
                        address1: null,
                        address2: null,
                        city: "South Plainfield",
                        state: "NJ",
                        postcode: "07080",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299529",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/nj769",
                    },
                },
            },
            {
                id: 55299611,
                organization_id: "DE03",
                url:
                    "https://www.petfinder.com/dog/poncho-55299611/de/wilmington/delaware-humane-association-de03/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Hound",
                    secondary: "Labrador Retriever",
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: "White / Cream",
                    secondary: "Brown / Chocolate",
                    tertiary: null,
                },
                age: "Young",
                gender: "Male",
                size: "Medium",
                coat: null,
                attributes: {
                    spayed_neutered: false,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: null,
                    dogs: null,
                    cats: null,
                },
                tags: [],
                name: "Poncho",
                description:
                    "ABOUT PET\nThis friend has just arrived! We will update with more info when we are able, however you are...",
                organization_animal_id: "DHA-A-10298",
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299611/1/?bust=1649950838&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299611/1/?bust=1649950838&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299611/1/?bust=1649950838&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299611/1/?bust=1649950838",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299611/2/?bust=1649950838&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299611/2/?bust=1649950838&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299611/2/?bust=1649950838&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299611/2/?bust=1649950838",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299611/1/?bust=1649950838&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299611/1/?bust=1649950838&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299611/1/?bust=1649950838&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299611/1/?bust=1649950838",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T15:30:15+0000",
                published_at: "2022-04-14T15:30:15+0000",
                distance: 92.3398,
                contact: {
                    email: "info@delawarehumane.org",
                    phone: "302-571-0111",
                    address: {
                        address1: "701 A Street",
                        address2: null,
                        city: "Wilmington",
                        state: "DE",
                        postcode: "19801",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299611",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/de03",
                    },
                },
            },
            {
                id: 55299612,
                organization_id: "DE03",
                url:
                    "https://www.petfinder.com/dog/penny-55299612/de/wilmington/delaware-humane-association-de03/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Hound",
                    secondary: "Labrador Retriever",
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: null,
                    secondary: "Gray / Blue / Silver",
                    tertiary: null,
                },
                age: "Young",
                gender: "Female",
                size: "Medium",
                coat: null,
                attributes: {
                    spayed_neutered: false,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: null,
                    dogs: null,
                    cats: null,
                },
                tags: [],
                name: "Penny",
                description:
                    "ABOUT PET\nThis friend has just arrived! We will update with more info when we are able, however you are...",
                organization_animal_id: "DHA-A-10299",
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299612/1/?bust=1649950838&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299612/1/?bust=1649950838&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299612/1/?bust=1649950838&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299612/1/?bust=1649950838",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299612/1/?bust=1649950838&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299612/1/?bust=1649950838&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299612/1/?bust=1649950838&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299612/1/?bust=1649950838",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T15:30:15+0000",
                published_at: "2022-04-14T15:30:15+0000",
                distance: 92.3398,
                contact: {
                    email: "info@delawarehumane.org",
                    phone: "302-571-0111",
                    address: {
                        address1: "701 A Street",
                        address2: null,
                        city: "Wilmington",
                        state: "DE",
                        postcode: "19801",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299612",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/de03",
                    },
                },
            },
            {
                id: 55299557,
                organization_id: "CT185",
                url:
                    "https://www.petfinder.com/dog/zephyr-55299557/ct/new-milford/animal-welfare-society-inc-ct185/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Border Collie",
                    secondary: null,
                    mixed: false,
                    unknown: false,
                },
                colors: {
                    primary: "Black",
                    secondary: "White / Cream",
                    tertiary: null,
                },
                age: "Baby",
                gender: "Male",
                size: "Medium",
                coat: "Medium",
                attributes: {
                    spayed_neutered: true,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: false,
                    dogs: true,
                    cats: null,
                },
                tags: ["Playful", "Smart", "Athletic", "Loyal", "Friendly", "Curious"],
                name: "Zephyr",
                description:
                    "Zephyr is a 4 month old neutered male border collie. He was signed over when his owner had a change...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299557/1/?bust=1649950202&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299557/1/?bust=1649950202&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299557/1/?bust=1649950202&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299557/1/?bust=1649950202",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299557/2/?bust=1649950204&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299557/2/?bust=1649950204&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299557/2/?bust=1649950204&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299557/2/?bust=1649950204",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299557/3/?bust=1649950204&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299557/3/?bust=1649950204&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299557/3/?bust=1649950204&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299557/3/?bust=1649950204",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299557/1/?bust=1649950202&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299557/1/?bust=1649950202&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299557/1/?bust=1649950202&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299557/1/?bust=1649950202",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T15:23:45+0000",
                published_at: "2022-04-14T15:23:45+0000",
                distance: 77.1137,
                contact: {
                    email: "animalwelfare.socty@snet.net",
                    phone: "(860) 354-1350",
                    address: {
                        address1: "8 Dodd Rd.",
                        address2: null,
                        city: "New Milford",
                        state: "CT",
                        postcode: "06776",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299557",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/ct185",
                    },
                },
            },
            {
                id: 55299512,
                organization_id: "NJ995",
                url:
                    "https://www.petfinder.com/dog/sersi-55299512/nj/lake-hopatcong/save-the-satos-nj995/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Papillon",
                    secondary: null,
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: "Gray / Blue / Silver",
                    secondary: null,
                    tertiary: null,
                },
                age: "Baby",
                gender: "Female",
                size: "Small",
                coat: "Short",
                attributes: {
                    spayed_neutered: false,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: true,
                    dogs: true,
                    cats: true,
                },
                tags: [
                    "Friendly",
                    "Affectionate",
                    "Loyal",
                    "Gentle",
                    "Playful",
                    "Smart",
                    "Curious",
                    "Funny",
                    "Athletic",
                    "Loves kisses",
                ],
                name: "Sersi",
                description:
                    "Sersi is a part of a litter of 4 born to a neglected Papillion mix.  The owner surrendered them to...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299512/1/?bust=1649949321&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299512/1/?bust=1649949321&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299512/1/?bust=1649949321&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299512/1/?bust=1649949321",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299512/1/?bust=1649949321&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299512/1/?bust=1649949321&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299512/1/?bust=1649949321&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299512/1/?bust=1649949321",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T15:15:23+0000",
                published_at: "2022-04-14T15:15:23+0000",
                distance: 28.8603,
                contact: {
                    email: "info@savethesatos.org",
                    phone: "(973) 288-1934",
                    address: {
                        address1: "5 Bowling Green Parkway",
                        address2: "Suite 13",
                        city: "Lake Hopatcong",
                        state: "NJ",
                        postcode: "07849",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299512",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/nj995",
                    },
                },
            },
            {
                id: 55299497,
                organization_id: "NY821",
                url:
                    "https://www.petfinder.com/dog/captain-55299497/ny/red-hook/perfect-pets-rescue-ny821/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Shepherd",
                    secondary: "Mixed Breed",
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: null,
                    secondary: null,
                    tertiary: null,
                },
                age: "Adult",
                gender: "Male",
                size: "Medium",
                coat: null,
                attributes: {
                    spayed_neutered: true,
                    house_trained: true,
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
                name: "Captain",
                description:
                    "CAPTAIN was an instant YES when volunteers met him at the shelter. If there was ever a perfect dog??? it...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299497/1/?bust=1649949175&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299497/1/?bust=1649949175&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299497/1/?bust=1649949175&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299497/1/?bust=1649949175",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299497/2/?bust=1649949176&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299497/2/?bust=1649949176&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299497/2/?bust=1649949176&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299497/2/?bust=1649949176",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299497/3/?bust=1649949177&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299497/3/?bust=1649949177&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299497/3/?bust=1649949177&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299497/3/?bust=1649949177",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299497/1/?bust=1649949175&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299497/1/?bust=1649949175&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299497/1/?bust=1649949175&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299497/1/?bust=1649949175",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T15:12:58+0000",
                published_at: "2022-04-14T15:12:58+0000",
                distance: 95.9949,
                contact: {
                    email: "perfectpetsresc@aol.com",
                    phone: "  ",
                    address: {
                        address1: null,
                        address2: null,
                        city: "Red Hook",
                        state: "NY",
                        postcode: "12523",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299497",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/ny821",
                    },
                },
            },
            {
                id: 55299479,
                organization_id: "NY821",
                url:
                    "https://www.petfinder.com/dog/sweetie-55299479/ny/red-hook/perfect-pets-rescue-ny821/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Husky",
                    secondary: "Hound",
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
                size: "Medium",
                coat: null,
                attributes: {
                    spayed_neutered: true,
                    house_trained: true,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: null,
                    dogs: true,
                    cats: null,
                },
                tags: [],
                name: "Sweetie",
                description:
                    "Pretty SWEETIE certainly lives up to her name! We actually couldn???t have picked a better one for this soft hearted...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/1/?bust=1649948931&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/1/?bust=1649948931&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/1/?bust=1649948931&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/1/?bust=1649948931",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/2/?bust=1649948932&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/2/?bust=1649948932&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/2/?bust=1649948932&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/2/?bust=1649948932",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/3/?bust=1649948933&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/3/?bust=1649948933&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/3/?bust=1649948933&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/3/?bust=1649948933",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/4/?bust=1649948933&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/4/?bust=1649948933&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/4/?bust=1649948933&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/4/?bust=1649948933",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/1/?bust=1649948931&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/1/?bust=1649948931&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/1/?bust=1649948931&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299479/1/?bust=1649948931",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T15:08:55+0000",
                published_at: "2022-04-14T15:08:55+0000",
                distance: 95.9949,
                contact: {
                    email: "perfectpetsresc@aol.com",
                    phone: "  ",
                    address: {
                        address1: null,
                        address2: null,
                        city: "Red Hook",
                        state: "NY",
                        postcode: "12523",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299479",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/ny821",
                    },
                },
            },
            // {
            //     "id": 55299461,
            //     "organization_id": "PA174",
            //     "url": "https://www.petfinder.com/dog/tucker-fka-chief-55299461/pa/west-chester/brandywine-valley-spca-pennsylvania-pa174/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
            //     "type": "Dog",
            //     "species": "Dog",
            //     "breeds": {
            //         "primary": "Mixed Breed",
            //         "secondary": null,
            //         "mixed": false,
            //         "unknown": false
            //     },
            //     "colors": {
            //         "primary": null,
            //         "secondary": null,
            //         "tertiary": null
            //     },
            //     "age": "Adult",
            //     "gender": "Male",
            //     "size": "Large",
            //     "coat": null,
            //     "attributes": {
            //         "spayed_neutered": true,
            //         "house_trained": false,
            //         "declawed": null,
            //         "special_needs": false,
            //         "shots_current": false
            //     },
            //     "environment": {
            //         "children": null,
            //         "dogs": null,
            //         "cats": null
            //     },
            //     "tags": [],
            //     "name": "Tucker FKA Chief",
            //     "description": "Tucker would love to find a furever family of his own. He is good with people and gets along well...",
            //     "organization_animal_id": "41173266",
            //     "photos": [],
            //     "primary_photo_cropped": null,
            //     "videos": [],
            //     "status": "adoptable",
            //     "status_changed_at": "2022-04-14T15:06:22+0000",
            //     "published_at": "2022-04-14T15:06:22+0000",
            //     "distance": 83.0587,
            //     "contact": {
            //         "email": "info@bvspca.org",
            //         "phone": "(610) 692-6113",
            //         "address": {
            //             "address1": "1212 Phoenixville Pike",
            //             "address2": null,
            //             "city": "West Chester",
            //             "state": "PA",
            //             "postcode": "19380",
            //             "country": "US"
            //         }
            //     },
            //     "_links": {
            //         "self": {
            //             "href": "/v2/animals/55299461"
            //         },
            //         "type": {
            //             "href": "/v2/types/dog"
            //         },
            //         "organization": {
            //             "href": "/v2/organizations/pa174"
            //         }
            //     }
            // },
            {
                id: 55299460,
                organization_id: "PA174",
                url:
                    "https://www.petfinder.com/dog/bingo-55299460/pa/west-chester/brandywine-valley-spca-pennsylvania-pa174/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Mixed Breed",
                    secondary: null,
                    mixed: false,
                    unknown: false,
                },
                colors: {
                    primary: null,
                    secondary: null,
                    tertiary: null,
                },
                age: "Young",
                gender: "Female",
                size: "Medium",
                coat: null,
                attributes: {
                    spayed_neutered: false,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: false,
                },
                environment: {
                    children: null,
                    dogs: null,
                    cats: null,
                },
                tags: [],
                name: "Bingo",
                description: null,
                organization_animal_id: "49942183",
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299460/1/?bust=1649949385&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299460/1/?bust=1649949385&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299460/1/?bust=1649949385&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299460/1/?bust=1649949385",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299460/1/?bust=1649949385&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299460/1/?bust=1649949385&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299460/1/?bust=1649949385&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299460/1/?bust=1649949385",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T15:06:22+0000",
                published_at: "2022-04-14T15:06:22+0000",
                distance: 83.0587,
                contact: {
                    email: "info@bvspca.org",
                    phone: "(610) 692-6113",
                    address: {
                        address1: "1212 Phoenixville Pike",
                        address2: null,
                        city: "West Chester",
                        state: "PA",
                        postcode: "19380",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299460",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/pa174",
                    },
                },
            },
            {
                id: 55299462,
                organization_id: "PA174",
                url:
                    "https://www.petfinder.com/dog/diamond-55299462/pa/west-chester/brandywine-valley-spca-pennsylvania-pa174/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Mixed Breed",
                    secondary: null,
                    mixed: false,
                    unknown: false,
                },
                colors: {
                    primary: null,
                    secondary: null,
                    tertiary: null,
                },
                age: "Young",
                gender: "Female",
                size: "Large",
                coat: null,
                attributes: {
                    spayed_neutered: false,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: false,
                },
                environment: {
                    children: null,
                    dogs: null,
                    cats: null,
                },
                tags: [],
                name: "Diamond",
                description: null,
                organization_animal_id: "49944549",
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299462/1/?bust=1649949385&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299462/1/?bust=1649949385&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299462/1/?bust=1649949385&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299462/1/?bust=1649949385",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299462/1/?bust=1649949385&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299462/1/?bust=1649949385&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299462/1/?bust=1649949385&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299462/1/?bust=1649949385",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T15:06:22+0000",
                published_at: "2022-04-14T15:06:22+0000",
                distance: 83.0587,
                contact: {
                    email: "info@bvspca.org",
                    phone: "(610) 692-6113",
                    address: {
                        address1: "1212 Phoenixville Pike",
                        address2: null,
                        city: "West Chester",
                        state: "PA",
                        postcode: "19380",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299462",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/pa174",
                    },
                },
            },
            // {
            //     id: 55299456,
            //     organization_id: "PA90",
            //     url: "https://www.petfinder.com/dog/tucker-55299456/pa/shohola/pike-county-humane-society-inc-pa90/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
            //     type: "Dog",
            //     species: "Dog",
            //     breeds: {
            //         primary: "Terrier",
            //         secondary: "Mixed Breed",
            //         mixed: true,
            //         unknown: false,
            //     },
            //     colors: {
            //         primary: null,
            //         secondary: null,
            //         tertiary: null,
            //     },
            //     age: "Adult",
            //     gender: "Male",
            //     size: "Medium",
            //     coat: null,
            //     attributes: {
            //         spayed_neutered: true,
            //         house_trained: true,
            //         declawed: null,
            //         special_needs: false,
            //         shots_current: false,
            //     },
            //     environment: {
            //         children: null,
            //         dogs: null,
            //         cats: null,
            //     },
            //     tags: [],
            //     name: "Tucker",
            //     description: null,
            //     organization_animal_id: "42533335",
            //     photos: [],
            //     primary_photo_cropped: null,
            //     videos: [],
            //     status: "adoptable",
            //     status_changed_at: "2022-04-14T15:06:20+0000",
            //     published_at: "2022-04-14T15:06:20+0000",
            //     distance: 64.4296,
            //     contact: {
            //         email: "pchsadoptions1@gmail.com",
            //         phone: "(570) 296-7654",
            //         address: {
            //             address1: null,
            //             address2: null,
            //             city: "Shohola",
            //             state: "PA",
            //             postcode: "18458",
            //             country: "US",
            //         },
            //     },
            //     _links: {
            //         self: {
            //             href: "/v2/animals/55299456",
            //         },
            //         type: {
            //             href: "/v2/types/dog",
            //         },
            //         organization: {
            //             href: "/v2/organizations/pa90",
            //         },
            //     },
            // },
            {
                id: 55299412,
                organization_id: "NY1493",
                url:
                    "https://www.petfinder.com/dog/athena-55299412/ny/larchmont/trina-and-friends-k9-rescue-ny1493/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "German Shepherd Dog",
                    secondary: null,
                    mixed: false,
                    unknown: false,
                },
                colors: {
                    primary: "Sable",
                    secondary: null,
                    tertiary: null,
                },
                age: "Young",
                gender: "Female",
                size: "Large",
                coat: "Medium",
                attributes: {
                    spayed_neutered: true,
                    house_trained: true,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: true,
                    dogs: true,
                    cats: true,
                },
                tags: [
                    "Friendly",
                    "Affectionate",
                    "Loyal",
                    "Smart",
                    "Funny",
                    "Loves kisses",
                    "Quiet",
                    "Gentle",
                ],
                name: "Athena",
                description:
                    "Meet Athena!  This beautiful sable female Shep is a dreamboat.  She is estimated to be between 1-2.  She does not...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/2/?bust=1649948645&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/2/?bust=1649948645&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/2/?bust=1649948645&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/2/?bust=1649948645",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/1/?bust=1649948645&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/1/?bust=1649948645&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/1/?bust=1649948645&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/1/?bust=1649948645",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/3/?bust=1649948646&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/3/?bust=1649948646&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/3/?bust=1649948646&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/3/?bust=1649948646",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/4/?bust=1649948647&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/4/?bust=1649948647&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/4/?bust=1649948647&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/4/?bust=1649948647",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/5/?bust=1649948648&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/5/?bust=1649948648&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/5/?bust=1649948648&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/5/?bust=1649948648",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/6/?bust=1649948648&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/6/?bust=1649948648&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/6/?bust=1649948648&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/6/?bust=1649948648",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/2/?bust=1649948645&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/2/?bust=1649948645&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/2/?bust=1649948645&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299412/2/?bust=1649948645",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T15:04:09+0000",
                published_at: "2022-04-14T15:04:09+0000",
                distance: 33.4065,
                contact: {
                    email: "trinafriendsk9rescue@gmail.com",
                    phone: null,
                    address: {
                        address1: null,
                        address2: null,
                        city: "Larchmont ",
                        state: "NY",
                        postcode: "10538",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299412",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/ny1493",
                    },
                },
            },
            {
                id: 55299386,
                organization_id: "NJ995",
                url:
                    "https://www.petfinder.com/dog/makkari-55299386/nj/lake-hopatcong/save-the-satos-nj995/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Papillon",
                    secondary: null,
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: "Brown / Chocolate",
                    secondary: null,
                    tertiary: null,
                },
                age: "Baby",
                gender: "Female",
                size: "Small",
                coat: "Short",
                attributes: {
                    spayed_neutered: false,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: true,
                    dogs: true,
                    cats: true,
                },
                tags: [
                    "Friendly",
                    "Affectionate",
                    "Loyal",
                    "Gentle",
                    "Playful",
                    "Smart",
                    "Curious",
                    "Funny",
                    "Athletic",
                    "Loves kisses",
                ],
                name: "Makkari",
                description:
                    "Makkari ??s a part of a litter of 4 born to a neglected Papillion mix.  The owner surrendered them to...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299386/1/?bust=1649948348&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299386/1/?bust=1649948348&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299386/1/?bust=1649948348&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299386/1/?bust=1649948348",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299386/1/?bust=1649948348&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299386/1/?bust=1649948348&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299386/1/?bust=1649948348&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299386/1/?bust=1649948348",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T14:59:09+0000",
                published_at: "2022-04-14T14:59:09+0000",
                distance: 28.8603,
                contact: {
                    email: "info@savethesatos.org",
                    phone: "(973) 288-1934",
                    address: {
                        address1: "5 Bowling Green Parkway",
                        address2: "Suite 13",
                        city: "Lake Hopatcong",
                        state: "NJ",
                        postcode: "07849",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299386",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/nj995",
                    },
                },
            },
            {
                id: 55299375,
                organization_id: "KY357",
                url:
                    "https://www.petfinder.com/dog/johnny-ringo-55299375/ny/stormville/fots-rescue-ky357/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Bloodhound",
                    secondary: null,
                    mixed: false,
                    unknown: false,
                },
                colors: {
                    primary: "Brown / Chocolate",
                    secondary: "Black",
                    tertiary: null,
                },
                age: "Young",
                gender: "Male",
                size: "Large",
                coat: "Short",
                attributes: {
                    spayed_neutered: true,
                    house_trained: true,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: true,
                    dogs: true,
                    cats: null,
                },
                tags: [
                    "Friendly",
                    "Affectionate",
                    "Playful",
                    "Smart",
                    "Brave",
                    "Curious",
                    "Funny",
                    "Athletic",
                    "Loves kisses",
                ],
                name: "Johnny Ringo",
                description:
                    "If you love Bloodhounds and don&#039;t mind a little slobber, this boy is one of the best. He just turned...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/1/?bust=1649948160&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/1/?bust=1649948160&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/1/?bust=1649948160&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/1/?bust=1649948160",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/2/?bust=1649948161&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/2/?bust=1649948161&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/2/?bust=1649948161&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/2/?bust=1649948161",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/3/?bust=1649948163&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/3/?bust=1649948163&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/3/?bust=1649948163&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/3/?bust=1649948163",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/4/?bust=1649948165&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/4/?bust=1649948165&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/4/?bust=1649948165&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/4/?bust=1649948165",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/5/?bust=1649948166&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/5/?bust=1649948166&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/5/?bust=1649948166&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/5/?bust=1649948166",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/6/?bust=1649948167&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/6/?bust=1649948167&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/6/?bust=1649948167&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/6/?bust=1649948167",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/1/?bust=1649948160&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/1/?bust=1649948160&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/1/?bust=1649948160&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299375/1/?bust=1649948160",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T14:56:09+0000",
                published_at: "2022-04-14T14:56:09+0000",
                distance: 69.8479,
                contact: {
                    email: "fotsrescue@gmail.com",
                    phone: "(270) 256-3960",
                    address: {
                        address1: null,
                        address2: null,
                        city: "Stormville",
                        state: "NY",
                        postcode: "12582",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299375",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/ky357",
                    },
                },
            },
            {
                id: 55299348,
                organization_id: "PA835",
                url:
                    "https://www.petfinder.com/dog/alexa-55299348/pa/sinking-spring/zoes-house-pa835/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Cavalier King Charles Spaniel",
                    secondary: null,
                    mixed: false,
                    unknown: false,
                },
                colors: {
                    primary: "Brown / Chocolate",
                    secondary: "Black",
                    tertiary: null,
                },
                age: "Senior",
                gender: "Female",
                size: "Medium",
                coat: null,
                attributes: {
                    spayed_neutered: true,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: null,
                    dogs: null,
                    cats: true,
                },
                tags: [
                    "Good for novice first time owner",
                    "Good with cats",
                    "Good with other dogs",
                    "Good with small kids",
                    "Needs regular grooming",
                ],
                name: "Alexa",
                description:
                    "Alexa is a delightful 8 year old tri-color Cavalier King Charles Spaniel who was surrendered to rescue when she was...",
                organization_animal_id: "ZOE-A-446",
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299348/1/?bust=1649948438&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299348/1/?bust=1649948438&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299348/1/?bust=1649948438&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299348/1/?bust=1649948438",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299348/1/?bust=1649948438&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299348/1/?bust=1649948438&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299348/1/?bust=1649948438&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299348/1/?bust=1649948438",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T14:50:26+0000",
                published_at: "2022-04-14T14:50:26+0000",
                distance: 94.6774,
                contact: {
                    email: "zoeshouserescue@gmail.com",
                    phone: null,
                    address: {
                        address1: "P.O. Box 2372",
                        address2: null,
                        city: "Sinking Spring",
                        state: "PA",
                        postcode: "19608",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299348",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/pa835",
                    },
                },
            },
            {
                id: 55299333,
                organization_id: "CT309",
                url:
                    "https://www.petfinder.com/dog/luna-55299333/ct/brookfield/double-dog-rescue-ct309/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Labrador Retriever",
                    secondary: "Terrier",
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: "Black",
                    secondary: "White / Cream",
                    tertiary: null,
                },
                age: "Baby",
                gender: "Female",
                size: "Medium",
                coat: "Short",
                attributes: {
                    spayed_neutered: true,
                    house_trained: true,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: true,
                    dogs: true,
                    cats: null,
                },
                tags: ["Friendly", "Affectionate", "Playful", "Curious"],
                name: "Luna",
                description:
                    "What moon songs Do you sing your babies? What sunshine do you bring?  I&#039;ll sing for you If you want...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/1/?bust=1649947717&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/1/?bust=1649947717&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/1/?bust=1649947717&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/1/?bust=1649947717",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/2/?bust=1649947717&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/2/?bust=1649947717&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/2/?bust=1649947717&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/2/?bust=1649947717",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/3/?bust=1649947718&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/3/?bust=1649947718&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/3/?bust=1649947718&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/3/?bust=1649947718",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/4/?bust=1649947719&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/4/?bust=1649947719&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/4/?bust=1649947719&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/4/?bust=1649947719",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/5/?bust=1649947719&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/5/?bust=1649947719&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/5/?bust=1649947719&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/5/?bust=1649947719",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/1/?bust=1649947717&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/1/?bust=1649947717&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/1/?bust=1649947717&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299333/1/?bust=1649947717",
                },
                videos: [
                    {
                        embed:
                            '<iframe title="Video" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen name="vidly-frame" src="https://s.vid.ly/embeded.html?link=d0m8h1&autoplay=false"><a target="_blank" href="https://vid.ly/d0m8h1"><img src="https://cf.cdn.vid.ly/d0m8h1/poster.jpg" /></a></iframe>',
                    },
                ],
                status: "adoptable",
                status_changed_at: "2022-04-14T14:48:46+0000",
                published_at: "2022-04-14T14:48:46+0000",
                distance: 73.2741,
                contact: {
                    email: "SharonV@doubledogrescue.org",
                    phone: null,
                    address: {
                        address1: null,
                        address2: null,
                        city: "Brookfield",
                        state: "CT",
                        postcode: "06804",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299333",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/ct309",
                    },
                },
            },
            {
                id: 55299316,
                organization_id: "PA802",
                url:
                    "https://www.petfinder.com/dog/luke-55299316/pa/philadelphia/animal-care-and-control-team-of-philadelphia-pa802/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Pit Bull Terrier",
                    secondary: null,
                    mixed: false,
                    unknown: false,
                },
                colors: {
                    primary: "Apricot / Beige",
                    secondary: "White / Cream",
                    tertiary: null,
                },
                age: "Adult",
                gender: "Male",
                size: "Medium",
                coat: null,
                attributes: {
                    spayed_neutered: true,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: false,
                    dogs: null,
                    cats: null,
                },
                tags: ["Adult Only Home Preferred"],
                name: "Luke",
                description:
                    "Meet Luke! This young pudge muffin was found as a stray on April 3rd. Luke has been the absolute BEST...",
                organization_animal_id: "ACCT-A-111257",
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299316/1/?bust=1649948130&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299316/1/?bust=1649948130&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299316/1/?bust=1649948130&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299316/1/?bust=1649948130",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299316/2/?bust=1649948125&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299316/2/?bust=1649948125&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299316/2/?bust=1649948125&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299316/2/?bust=1649948125",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299316/1/?bust=1649948130&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299316/1/?bust=1649948130&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299316/1/?bust=1649948130&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299316/1/?bust=1649948130",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T14:45:12+0000",
                published_at: "2022-04-14T14:45:12+0000",
                distance: 62.8357,
                contact: {
                    email: "adopt@acctphilly.org",
                    phone: "(267) 385-3800",
                    address: {
                        address1: "111 W. Hunting Park Ave.",
                        address2: null,
                        city: "Philadelphia",
                        state: "PA",
                        postcode: "19140",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299316",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/pa802",
                    },
                },
            },
            {
                id: 55299304,
                organization_id: "PA235",
                url:
                    "https://www.petfinder.com/dog/desi-55299304/pa/philadelphia/paws-philadelphia-animal-welfare-society-pa235/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Mixed Breed",
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
                gender: "Male",
                size: "Large",
                coat: null,
                attributes: {
                    spayed_neutered: true,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: null,
                    dogs: null,
                    cats: null,
                },
                tags: [],
                name: "Desi",
                description:
                    "Say hello to friendly goofball, Desi! Desi absolutely loves people, he is eager to befriend anybody who passes by. When...",
                organization_animal_id: "17939274-51613-Foster",
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299304/1/?bust=1649948946&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299304/1/?bust=1649948946&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299304/1/?bust=1649948946&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299304/1/?bust=1649948946",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299304/2/?bust=1649948946&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299304/2/?bust=1649948946&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299304/2/?bust=1649948946&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299304/2/?bust=1649948946",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299304/3/?bust=1649948945&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299304/3/?bust=1649948945&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299304/3/?bust=1649948945&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299304/3/?bust=1649948945",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299304/1/?bust=1649948946&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299304/1/?bust=1649948946&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299304/1/?bust=1649948946&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299304/1/?bust=1649948946",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T14:43:45+0000",
                published_at: "2022-04-14T14:43:45+0000",
                distance: 66.4671,
                contact: {
                    email: "adoptions@phillypaws.org",
                    phone: "(215) 238-9901 ext. 30",
                    address: {
                        address1: "100 N. 2nd Street",
                        address2: "(on the corner of 2nd & Arch Streets)",
                        city: "Philadelphia",
                        state: "PA",
                        postcode: "19106",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299304",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/pa235",
                    },
                },
            },
            {
                id: 55299115,
                organization_id: "NY237",
                url:
                    "https://www.petfinder.com/dog/grandma-g-55299115/ny/sidney/delaware-valley-humane-society-ny237/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Pit Bull Terrier",
                    secondary: null,
                    mixed: false,
                    unknown: false,
                },
                colors: {
                    primary: null,
                    secondary: null,
                    tertiary: null,
                },
                age: "Senior",
                gender: "Female",
                size: "Medium",
                coat: null,
                attributes: {
                    spayed_neutered: true,
                    house_trained: true,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: true,
                    dogs: false,
                    cats: false,
                },
                tags: ["Funny", "Playful", "Friendly"],
                name: "Grandma G ",
                description: null,
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299115/1/?bust=1649946689&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299115/1/?bust=1649946689&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299115/1/?bust=1649946689&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299115/1/?bust=1649946689",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299115/1/?bust=1649946689&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299115/1/?bust=1649946689&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299115/1/?bust=1649946689&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299115/1/?bust=1649946689",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T14:31:30+0000",
                published_at: "2022-04-14T14:31:30+0000",
                distance: 16.8592,
                contact: {
                    email: "dvhs.sidney@gmail.com",
                    phone: "(607) 563-7780",
                    address: {
                        address1: null,
                        address2: null,
                        city: "Sidney",
                        state: "NY",
                        postcode: "13838",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299115",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/ny237",
                    },
                },
            },
            {
                id: 55299113,
                organization_id: "NY211",
                url:
                    "https://www.petfinder.com/dog/gus-55299113/ny/kingston/ulster-county-spca-ny211/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Pit Bull Terrier",
                    secondary: null,
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: null,
                    secondary: null,
                    tertiary: null,
                },
                age: "Young",
                gender: "Male",
                size: "Medium",
                coat: null,
                attributes: {
                    spayed_neutered: true,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: null,
                    dogs: null,
                    cats: null,
                },
                tags: [],
                name: "Gus",
                description:
                    "Primary Color: Grey Secondary Color: White Weight: 58.2lbs Age: 1yrs 0mths 0wks Animal has been Neutered",
                organization_animal_id: "8933",
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/1/?bust=1649947278&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/1/?bust=1649947278&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/1/?bust=1649947278&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/1/?bust=1649947278",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/2/?bust=1649947278&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/2/?bust=1649947278&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/2/?bust=1649947278&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/2/?bust=1649947278",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/3/?bust=1649947278&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/3/?bust=1649947278&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/3/?bust=1649947278&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/3/?bust=1649947278",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/4/?bust=1649947279&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/4/?bust=1649947279&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/4/?bust=1649947279&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/4/?bust=1649947279",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/5/?bust=1649947278&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/5/?bust=1649947278&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/5/?bust=1649947278&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/5/?bust=1649947278",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/1/?bust=1649947278&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/1/?bust=1649947278&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/1/?bust=1649947278&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299113/1/?bust=1649947278",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T14:31:11+0000",
                published_at: "2022-04-14T14:31:11+0000",
                distance: 90.999,
                contact: {
                    email: "info@ucspca.org",
                    phone: "845-331-5377",
                    address: {
                        address1: "20 Wiedy Road",
                        address2: null,
                        city: "Kingston",
                        state: "NY",
                        postcode: "12401",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299113",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/ny211",
                    },
                },
            },
            {
                id: 55299057,
                organization_id: "NY352",
                url:
                    "https://www.petfinder.com/dog/marley-55299057/ny/nanuet/northstar-placement-ny352/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Retriever",
                    secondary: null,
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: "White / Cream",
                    secondary: null,
                    tertiary: null,
                },
                age: "Baby",
                gender: "Male",
                size: "Medium",
                coat: "Medium",
                attributes: {
                    spayed_neutered: false,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: true,
                    dogs: true,
                    cats: true,
                },
                tags: [
                    "Friendly",
                    "Affectionate",
                    "Loyal",
                    "Gentle",
                    "Playful",
                    "Smart",
                    "Curious",
                    "Brave",
                    "Funny",
                    "Athletic",
                    "Quiet",
                    "Couch potato",
                    "Loves kisses",
                    "Dignified",
                    "Independent",
                ],
                name: "Marley",
                description:
                    "The Cotton Fluffs??\n\nMarley: lighter tan and white male, bouncy and playful, very smart. He always wants to be right...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/1/?bust=1649946229&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/1/?bust=1649946229&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/1/?bust=1649946229&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/1/?bust=1649946229",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/2/?bust=1649946230&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/2/?bust=1649946230&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/2/?bust=1649946230&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/2/?bust=1649946230",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/3/?bust=1649946231&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/3/?bust=1649946231&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/3/?bust=1649946231&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/3/?bust=1649946231",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/4/?bust=1649946232&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/4/?bust=1649946232&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/4/?bust=1649946232&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/4/?bust=1649946232",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/5/?bust=1649946232&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/5/?bust=1649946232&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/5/?bust=1649946232&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/5/?bust=1649946232",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/6/?bust=1649946233&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/6/?bust=1649946233&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/6/?bust=1649946233&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/6/?bust=1649946233",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/1/?bust=1649946229&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/1/?bust=1649946229&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/1/?bust=1649946229&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299057/1/?bust=1649946229",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T14:23:55+0000",
                published_at: "2022-04-14T14:23:55+0000",
                distance: 34.4686,
                contact: {
                    email: "2ndchancepets@gmail.com",
                    phone: "(914) 407-2144",
                    address: {
                        address1: "P O Box 172",
                        address2: "Congers",
                        city: "Nanuet",
                        state: "NY",
                        postcode: "10954",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299057",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/ny352",
                    },
                },
            },
            {
                id: 55299020,
                organization_id: "NJ627",
                url:
                    "https://www.petfinder.com/dog/kailua-55299020/nj/paramus/bonnies-animal-rescue-kingdom-nj627/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Labrador Retriever",
                    secondary: null,
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: "Yellow / Tan / Blond / Fawn",
                    secondary: "Brown / Chocolate",
                    tertiary: null,
                },
                age: "Baby",
                gender: "Male",
                size: "Large",
                coat: "Short",
                attributes: {
                    spayed_neutered: false,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: true,
                    dogs: true,
                    cats: true,
                },
                tags: ["Playful", "Athletic", "Friendly"],
                name: "Kailua",
                description:
                    "Come visit me!\nPet Supplies Plus\n391 Broadway \nHillsdale, New Jersey\nSaturdays and Sundays from 2 p.m.-6 p.m.\n\nDUE TO...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/1/?bust=1649945936&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/1/?bust=1649945936&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/1/?bust=1649945936&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/1/?bust=1649945936",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/2/?bust=1649945937&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/2/?bust=1649945937&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/2/?bust=1649945937&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/2/?bust=1649945937",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/3/?bust=1649945938&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/3/?bust=1649945938&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/3/?bust=1649945938&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/3/?bust=1649945938",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/4/?bust=1649945938&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/4/?bust=1649945938&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/4/?bust=1649945938&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/4/?bust=1649945938",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/5/?bust=1649945939&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/5/?bust=1649945939&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/5/?bust=1649945939&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/5/?bust=1649945939",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/1/?bust=1649945936&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/1/?bust=1649945936&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/1/?bust=1649945936&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299020/1/?bust=1649945936",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T14:19:00+0000",
                published_at: "2022-04-14T14:19:00+0000",
                distance: 23.7359,
                contact: {
                    email: "Boniark15@gmail.com",
                    phone: null,
                    address: {
                        address1: null,
                        address2: null,
                        city: "Paramus",
                        state: "NJ",
                        postcode: "07653",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299020",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/nj627",
                    },
                },
            },
            {
                id: 55299013,
                organization_id: "NY352",
                url:
                    "https://www.petfinder.com/dog/tiger-55299013/ny/nanuet/northstar-placement-ny352/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Terrier",
                    secondary: null,
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: "Brindle",
                    secondary: "Brown / Chocolate",
                    tertiary: "White / Cream",
                },
                age: "Baby",
                gender: "Male",
                size: "Medium",
                coat: "Short",
                attributes: {
                    spayed_neutered: false,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: true,
                    dogs: true,
                    cats: true,
                },
                tags: [
                    "Friendly",
                    "Affectionate",
                    "Loyal",
                    "Gentle",
                    "Playful",
                    "Smart",
                    "Brave",
                    "Curious",
                    "Independent",
                    "Funny",
                    "Athletic",
                    "Quiet",
                    "Couch potato",
                    "Loves kisses",
                ],
                name: "Tiger",
                description:
                    "The Cotton Fluffs! \n\nTiger: brindle and white male, loves to snuggle and super spunky. He is tiny, but mighty! Very...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/1/?bust=1649945799&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/1/?bust=1649945799&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/1/?bust=1649945799&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/1/?bust=1649945799",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/2/?bust=1649945800&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/2/?bust=1649945800&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/2/?bust=1649945800&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/2/?bust=1649945800",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/3/?bust=1649945801&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/3/?bust=1649945801&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/3/?bust=1649945801&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/3/?bust=1649945801",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/4/?bust=1649945802&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/4/?bust=1649945802&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/4/?bust=1649945802&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/4/?bust=1649945802",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/5/?bust=1649945803&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/5/?bust=1649945803&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/5/?bust=1649945803&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/5/?bust=1649945803",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/6/?bust=1649945804&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/6/?bust=1649945804&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/6/?bust=1649945804&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/6/?bust=1649945804",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/1/?bust=1649945799&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/1/?bust=1649945799&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/1/?bust=1649945799&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299013/1/?bust=1649945799",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T14:16:45+0000",
                published_at: "2022-04-14T14:16:45+0000",
                distance: 34.4686,
                contact: {
                    email: "2ndchancepets@gmail.com",
                    phone: "(914) 407-2144",
                    address: {
                        address1: "P O Box 172",
                        address2: "Congers",
                        city: "Nanuet",
                        state: "NY",
                        postcode: "10954",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299013",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/ny352",
                    },
                },
            },
            {
                id: 55299010,
                organization_id: "NJ627",
                url:
                    "https://www.petfinder.com/dog/cognac-55299010/nj/paramus/bonnies-animal-rescue-kingdom-nj627/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
                type: "Dog",
                species: "Dog",
                breeds: {
                    primary: "Catahoula Leopard Dog",
                    secondary: "Shepherd",
                    mixed: true,
                    unknown: false,
                },
                colors: {
                    primary: "Yellow / Tan / Blond / Fawn",
                    secondary: null,
                    tertiary: null,
                },
                age: "Baby",
                gender: "Male",
                size: "Large",
                coat: "Short",
                attributes: {
                    spayed_neutered: false,
                    house_trained: false,
                    declawed: null,
                    special_needs: false,
                    shots_current: true,
                },
                environment: {
                    children: true,
                    dogs: true,
                    cats: true,
                },
                tags: ["Playful", "Athletic", "Friendly"],
                name: "Cognac",
                description:
                    "Come visit me!\nPet Supplies Plus\n391 Broadway \nHillsdale, New Jersey\nSaturdays and Sundays from 2 p.m.-6 p.m.\n\nDUE TO...",
                organization_animal_id: null,
                photos: [
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/1/?bust=1649945784&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/1/?bust=1649945784&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/1/?bust=1649945784&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/1/?bust=1649945784",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/2/?bust=1649945784&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/2/?bust=1649945784&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/2/?bust=1649945784&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/2/?bust=1649945784",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/3/?bust=1649945785&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/3/?bust=1649945785&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/3/?bust=1649945785&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/3/?bust=1649945785",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/4/?bust=1649945785&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/4/?bust=1649945785&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/4/?bust=1649945785&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/4/?bust=1649945785",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/5/?bust=1649945786&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/5/?bust=1649945786&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/5/?bust=1649945786&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/5/?bust=1649945786",
                    },
                    {
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/6/?bust=1649945786&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/6/?bust=1649945786&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/6/?bust=1649945786&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/6/?bust=1649945786",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/1/?bust=1649945784&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/1/?bust=1649945784&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/1/?bust=1649945784&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55299010/1/?bust=1649945784",
                },
                videos: [],
                status: "adoptable",
                status_changed_at: "2022-04-14T14:16:28+0000",
                published_at: "2022-04-14T14:16:28+0000",
                distance: 23.7359,
                contact: {
                    email: "Boniark15@gmail.com",
                    phone: null,
                    address: {
                        address1: null,
                        address2: null,
                        city: "Paramus",
                        state: "NJ",
                        postcode: "07653",
                        country: "US",
                    },
                },
                _links: {
                    self: {
                        href: "/v2/animals/55299010",
                    },
                    type: {
                        href: "/v2/types/dog",
                    },
                    organization: {
                        href: "/v2/organizations/nj627",
                    },
                },
            },
            // "pagination": {
            //     "count_per_page": 40,
            //     "total_count": 8407,
            //     "current_page": 1,
            //     "total_pages": 211,
            //     "_links": {
            //         "next": {
            //             "href": "/v2/animals?distance=100&limit=40&location=07036&page=2&type=Dog"
            //         }
            //     }

            {
                id: 55203150,
                organization_id: "PA562",
                url:
                    "https://www.petfinder.com/dog/jackie-in-the-box-society-55203150/pa/horsham/wags-rescue-and-referral-pa562/?referrer_id=3bb9877e-f528-468d-b687-145a33f41376",
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
                        small:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55203150/1/?bust=1649088951&width=100",
                        medium:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55203150/1/?bust=1649088951&width=300",
                        large:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55203150/1/?bust=1649088951&width=600",
                        full:
                            "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55203150/1/?bust=1649088951",
                    },
                ],
                primary_photo_cropped: {
                    small:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55203150/1/?bust=1649088951&width=300",
                    medium:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55203150/1/?bust=1649088951&width=450",
                    large:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55203150/1/?bust=1649088951&width=600",
                    full:
                        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55203150/1/?bust=1649088951",
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
        likedPets: [],
    };

    const [state, dispatch] = useReducer(petsReducer, initialState);

    // Get Pets from petfinder

    // Like a Pet
    const likePet = (pet) => {
        dispatch({ type: LIKE_PET, payload: pet });
    };

    // Delete Liked Pet
    const deletePet = (id) => {
        // console.log("PetState.js - Deleting Pet:");
        // console.log(id);
        dispatch({ type: DELETE_PET, payload: id });
    };

    // Update pets for adoption
    const updatePets = (id) => {
        dispatch({ type: UPDATE_PETS, payload: id });
    };

    // Set alert

    // Delete alert

    return (
        <PetsContext.Provider
            value={{
                petsForAdoption: state.petsForAdoption,
                likedPets: state.likedPets,
                likePet,
                deletePet,
                updatePets,
            }}
        >
            {props.children}
        </PetsContext.Provider>
    );
};

export default PetsState;
