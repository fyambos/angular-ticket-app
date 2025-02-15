import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
})

export class EditProfileComponent implements OnInit {
  nickname: string = '';
  bio: string = '';
  role: string = '';
  errorMessage: string = '';

  constructor(
    private auth: Auth,
    private userService: UserService,
    private router: Router,
    public readonly languageService: LanguageService,
  ) {}

  async ngOnInit() {
    const user = this.auth.currentUser;
    if (user) {
      const profile = await this.userService.getUserProfile(user.uid);
      this.nickname = profile?.nickname || '';
      this.bio = profile?.bio || '';
      this.role = profile?.role || '';
    }
  }

  async saveProfile() {
    const user = this.auth.currentUser;
    if (user) {
      try {
        await this.userService.createOrUpdateUserProfile(user.uid, {
          nickname: this.nickname,
          bio: this.bio,
          role: this.role,
          email: user.email ?? '',
        });
        alert('Profile updated successfully!');
        this.router.navigate(['/profile']);
      } catch (error) {
        this.errorMessage = 'Failed to save profile.';
        console.error(error);
      }
    }
  }
}
