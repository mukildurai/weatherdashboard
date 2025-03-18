
pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        // Build the Docker image
                        def customImage = docker.build("mukilan18/sample:hello", "--pull=true .")
                        // Push the Docker image
                        customImage.push()
                    }
                }
            }
        }
    }
}
