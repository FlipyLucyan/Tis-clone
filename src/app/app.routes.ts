import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { LadingPage } from './components/lading-page/lading-page';
import { NavBar } from './components/nav-bar/nav-bar';
import { Footer } from './components/footer/footer';

export const routes: Routes = [
    {path:'', component: LadingPage}
];

 