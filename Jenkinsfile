pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('DOCKER_HUB_CREDENTIALS_ID') // Replace with your credentials ID
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm // Check out the code from the repository
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t mukilan18/sample:sample .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    sh 'echo $DOCKER_HUB_CREDENTIALS_PSW | docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin'
                    sh 'docker push mukilan18/sample:sample'
                }
            }
        }
    }

    post {
        success {
            echo 'Docker image built and pushed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
    }
}
