
import  Node from './node.js';       
//import  {inorder} from  './inorder.js';


class binarySearchTree{
    constructor(){
        this.root= null;
    }
    
    insert(data){
        var newNode = new Node(data);
        if(this.root === null)
            this.root = newNode;
        
        else
            this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null)
                node.left = newNode;
            
            else
             this.insertNode(node.left, newNode);
        }
        else {
            if(node.right ===null)
            node.right = newNode;
            else
            this.insertNode(node.right, newNode);
        }
    }
   
    getRootNode()
{
    return this.root;
}
inorder = (node) =>
{
  //  console.log("inoder")
    if(node !== null)
    {
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }
} 


}
var BST = new binarySearchTree();
  
// Inserting nodes to the BinarySearchTree
// BST.insert(15);
// BST.insert(25);
// BST.insert(10);
// BST.insert(7);
// BST.insert(22);
// BST.insert(17);
// BST.insert(13);
// BST.insert(5);
// BST.insert(9);
// BST.insert(27);
BST.insert(1);
BST.insert(2);
BST.insert(3);
BST.insert(4);
var root = BST.getRootNode();
console.log("inorder traversal");
BST.inorder(root);





 


    // console.log(insert(24));
    // console.log(insert(2));
    // console.log(insert(34));
    
    