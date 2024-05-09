# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Deploy as an AWS EC2 VPS

I see, you want to use a Docker image as the base for your EC2 instance, essentially creating a custom AMI (Amazon Machine Image) from a Docker image. Here's how you can achieve that:

1. **Create a Dockerfile**: Start by creating a Dockerfile that describes the environment and configuration for your EC2 instance. This Dockerfile will be used to build a Docker image.

    ```Dockerfile
    FROM your-base-image:tag

    # Add your configuration and setup commands here
    ```

    Replace `your-base-image:tag` with the Docker image you want to use as the base for your EC2 instance. Include any additional configuration or setup commands specific to your application or environment.

2. **Build the Docker Image**: Once you have your Dockerfile ready, build the Docker image using the `docker build` command.

    ```bash
    docker build -t custom-ec2-image .
    ```

    This command will build a Docker image named `custom-ec2-image` using the Dockerfile in the current directory.

3. **Run the Docker Container (Optional)**: You can optionally run a container from the Docker image to test it locally before proceeding to create an AMI.

    ```bash
    docker run -it custom-ec2-image /bin/bash
    ```

    This command will start a container from the `custom-ec2-image` image and drop you into a bash shell within the container.

4. **Export the Docker Image**: Export the Docker image as a tar archive using the `docker save` command.

    ```bash
    docker save -o custom-ec2-image.tar custom-ec2-image
    ```

    This command will save the Docker image `custom-ec2-image` as a tar archive named `custom-ec2-image.tar`.

5. **Upload the Docker Image to S3**: Upload the tar archive containing the Docker image to an S3 bucket in your AWS account.

6. **Create a Custom AMI**: Use the AWS Management Console or AWS CLI to import the Docker image from the S3 bucket and create a custom AMI from it.

    - If you're using the AWS Management Console, navigate to the EC2 service, then click on "AMIs" in the left sidebar. From there, click on "Import/Export" and follow the instructions to import the Docker image from S3 and create a custom AMI.

    - If you're using the AWS CLI, you can use the `aws ec2 import-image` command to import the Docker image from S3 and create a custom AMI.

7. **Launch an EC2 Instance from the Custom AMI**: Once the custom AMI is created, you can launch EC2 instances from it just like you would with any other AMI. The instances will be pre-configured with the environment and configuration specified in the Docker image.

That's it! You've now deployed a Docker image as an EC2 instance by creating a custom AMI from the Docker image. This approach allows you to leverage the flexibility and portability of Docker images while using them as the basis for your EC2 instances.

