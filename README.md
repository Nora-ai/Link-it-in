# Link-it-in

## Project Description

Nora needs to find a job. Raul needs to find a job. Link-it-in is a job tracker where Nora and Raul can add links to jobs they find in between teaching computer science lessons. Once they are ready to apply, the list will help them move quickly. 

## Wireframes
![1](https://res.cloudinary.com/alienora/image/upload/v1629328554/Web_1920_1_badtos.png)
![2](https://res.cloudinary.com/alienora/image/upload/v1629328574/Web_1920_2_vm41dw.png)
![3](https://res.cloudinary.com/alienora/image/upload/v1629328574/Web_1920_6_xfglm9.png)
![4](https://res.cloudinary.com/alienora/image/upload/v1629328574/Web_1920_4_swocfo.png)
![5](https://res.cloudinary.com/alienora/image/upload/v1629328575/Web_1920_3_xjz1tj.png)
![6](https://res.cloudinary.com/alienora/image/upload/v1629328574/Web_1920_5_ebasy2.png)
![7](https://res.cloudinary.com/alienora/image/upload/v1629328575/Web_1920_7_cciubt.png)
![8](https://res.cloudinary.com/alienora/image/upload/v1629328574/Web_1920_9_ubhcnr.png)


## Component Hierarchy
![component hierarchy](https://res.cloudinary.com/alienora/image/upload/v1629383433/Screen_Shot_2021-08-19_at_9.30.16_AM_j0h8ks.png)

## API and Data Sample

```
{
    "records": [
        {
            "id": "rec8bHBAnbZiPO2W9",
            "fields": {
                "Created": "2021-08-19",
                "owner": "Nora",
                "company": "Digit",
                "position": "Software Engineer",
                "status": true,
                "salary": "90K",
                "link": "https://www.canva.com/"
            },
            "createdTime": "2021-08-19T14:40:52.000Z"
        },
        {
            "id": "recEevSyDNvjv49pw",
            "fields": {
                "Created": "2021-08-19",
                "owner": "Nora",
                "company": "Pendo.io",
                "position": "Solutions Enginner",
                "status": true,
                "salary": "80K",
                "app_process": "Internal recruiter reached out to me",
                "tech_assessment": "hackerank 2 hour timed",
                "next_round": "panel interview",
                "final": "rejected",
                "notes": "Recruiter said I seemed more interested in a software engineering role",
                "link": "https://www.canva.com/"
            },
            "createdTime": "2021-08-19T14:40:52.000Z"
        },
        {
            "id": "recaGSulZcqNZpHK1",
            "fields": {
                "Created": "2021-08-19",
                "owner": "Raul",
                "link": "https://www.canva.com/",
                "company": "Google",
                "position": "Software Engineer"
            },
            "createdTime": "2021-08-19T14:40:52.000Z"
        },
        {
            "id": "rectJFhWtp0ViNblc",
            "fields": {
                "Created": "2021-08-19",
                "owner": "Raul",
                "link": "https://www.canva.com/",
                "company": "Tesla",
                "position": "Software Engineer"
            },
            "createdTime": "2021-08-19T14:50:22.000Z"
        }
    ]
}

```

#### MVP 

- Use Airtable to create an API
- Use React.JS for front end 
- User can add a link for a job application to a form that will prompt the user to fill out more information about said job. 
- User can Create, Read, Update and Delete their job links. 
- The OG users will be Nora and Raul (PMVP will allow to have more users)
- Once user adds a link, they are prompted to add in company and position initially (required). All other form info is optional and can be added later.

#### PostMVP  

- New Users can form job lists
- Authentication

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|August 17| Wireframes | Complete
|August 18| Readme and Component Hierarchy| Incomplete
|August 19| Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 20| 
|August 21| 
|August 22| 


