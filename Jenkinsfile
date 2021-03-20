node{
  
   stage('Git Checkout'){
    sh "rm -rf $WORKSPACE/*"
    git 'https://github.com/Infuser-s/rom-ui.git'
  }
  
  stage('Image creation'){
    sh "docker build -t docker-registry:rom-ui-${BUILD_NUMBER} ."
  }
  stage('push to ec2'){
      sh "aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 934166022011.dkr.ecr.us-east-1.amazonaws.com"
      sh "docker tag docker-registry:rom-ui-${BUILD_NUMBER} 934166022011.dkr.ecr.us-east-1.amazonaws.com/docker-registry:rom-ui-${BUILD_NUMBER}"
      sh "docker push 934166022011.dkr.ecr.us-east-1.amazonaws.com/docker-registry:rom-ui-${BUILD_NUMBER}"
      
  }
  stage('call deploy job'){
      
    build job: 'rom-ui - deploy-from-ecr', parameters: [[$class: 'StringParameterValue', name: 'docker_image_url', value: "934166022011.dkr.ecr.us-east-1.amazonaws.com/docker-registry:rom-ui-${BUILD_NUMBER}"]]
  }
  
 
}
