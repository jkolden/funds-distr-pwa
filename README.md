This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The application is a PWA that allows for mobile entry of SaaS project time cards. Upon submitting a timecard, the data is saved to an Oracle database and is further processed before being loaded to Oracle SaaS Project Cost Accounting.

## Instructions to run and deploy:

- Clone this repo to a local directory on your host machine.
- CD into that directory and run `npm install`
- `npm run` to run a version on your local machine
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Screen Shots of PWA:
![image](https://user-images.githubusercontent.com/21246211/107154174-57f0ba80-6926-11eb-92d8-e3c35f8ab8fa.png)

### Deployment to OCI

These are sample commands that can be used to build the docker container and push to dockerhub. From there it can be delpoyed to any OCI K8 cluster in your tenancy using the included deployment.yaml.

- Build the Docker container `docker build -t [dir]/[tag] .`
- `docker push [dir]/[tag]`
- `kubectl deploy -f deployment.yaml`

### Deployment to Vercel

Deploying to a third pary like Vercel is easier, assuming you have the Vercel OCI installed:

- `npm build`
- CD into build folder
- `$ vercel`
- Accept default and note URL. It's deployed!
