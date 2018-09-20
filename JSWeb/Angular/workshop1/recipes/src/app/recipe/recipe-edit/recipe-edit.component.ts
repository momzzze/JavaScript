import { Component, OnInit } from '@angular/core';
import { RecipeCreate } from '../models/recipe-create.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { ToastrService } from '../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {


  id: string
  bindingModel: RecipeCreate;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.recipeService.getById(this.id).subscribe((data) => {
      this.bindingModel = data
    })
  }

  edit(){
    const body={
      [this.id]:this.bindingModel     
    }
    this.recipeService.editRecipe(body).subscribe((data)=>{
      this.toastr.success('Successfuly updated!','Success!')
      this.router.navigate(['/recipes/list'])
    })
  }

}
