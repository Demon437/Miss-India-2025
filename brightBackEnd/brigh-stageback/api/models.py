from django.db import models
from django.core.validators import RegexValidator
from django.utils import timezone
from datetime import date


phone_validator = RegexValidator(r'^\+?1?\d{9,15}$', 'Enter a valid phone number.')


class Contestant(models.Model):
	# Personal Information
	first_name = models.CharField(max_length=150)
	middle_name = models.CharField(max_length=150, blank=True)
	last_name = models.CharField(max_length=150)
	date_of_birth = models.DateField()
	age = models.PositiveSmallIntegerField(null=True, blank=True, help_text='Optional - can be auto-calculated from date_of_birth')
	height_feet = models.PositiveSmallIntegerField(null=True, blank=True)
	height_inches = models.PositiveSmallIntegerField(null=True, blank=True)
	mobile_no = models.CharField(max_length=20, validators=[phone_validator])
	alternate_mobile = models.CharField(max_length=20, blank=True)
	email = models.EmailField()
	nationality = models.CharField(max_length=100, blank=True)
	instagram_profile = models.URLField(blank=True)

	# Location & Documents
	native_state = models.CharField(max_length=100, blank=True)
	current_state = models.CharField(max_length=100, blank=True)
	aadhar_card = models.FileField(upload_to='documents/aadhar/', blank=True, null=True)

	# Photos & Additional Information
	close_up_photo = models.ImageField(upload_to='photos/close_up/', blank=True, null=True)
	full_length_photo = models.ImageField(upload_to='photos/full_length/', blank=True, null=True)
	mid_length_photo = models.ImageField(upload_to='photos/mid_length/', blank=True, null=True)
	natural_look_photo = models.ImageField(upload_to='photos/natural_look/', blank=True, null=True)
	natural_look_makeup_photo = models.ImageField(upload_to='photos/natural_look_makeup/', blank=True, null=True)
	how_did_you_hear = models.CharField(max_length=250, blank=True, help_text='e.g., Social Media, Friend, Advertisement')

	# Payment & Declaration
	registration_fee = models.DecimalField(max_digits=8, decimal_places=2, default=999.00)
	payment_screenshot = models.FileField(upload_to='payments/', blank=True, null=True)
	terms_accepted = models.BooleanField(default=False)

	# Metadata
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	class Meta:
		ordering = ['-created_at']

	def __str__(self):
		return f"{self.first_name} {self.last_name}"

	@property
	def full_name(self):
		parts = [self.first_name]
		if self.middle_name:
			parts.append(self.middle_name)
		parts.append(self.last_name)
		return ' '.join(parts)

	@property
	def computed_age(self):
		if self.date_of_birth:
			today = date.today()
			born = self.date_of_birth
			a = today.year - born.year - ((today.month, today.day) < (born.month, born.day))
			return a
		return None

	def save(self, *args, **kwargs):
		# Auto-fill age if not provided
		try:
			if (self.age is None or self.age == 0) and self.date_of_birth:
				self.age = self.computed_age
		except Exception:
			pass
		super().save(*args, **kwargs)
